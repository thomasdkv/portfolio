<script lang="ts">
  import { onMount } from 'svelte';
  import * as pdfjsLib from 'pdfjs-dist';
  import { base } from '$app/paths';

  // Path to your PDF worker script
  let workerSrc = `${base}/documents/pdf.worker.mjs`;
  
  // Replace with the path to your PDF file
  import { data, title } from '@data/resume';
	import CommonPage from '$lib/components/CommonPage.svelte';

  // Explicitly type the canvas variable
  let canvas: HTMLCanvasElement;
  let loading = true;

  onMount(async () => {
    // Set the workerSrc for PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

    // Load the PDF
    const pdf = await pdfjsLib.getDocument(data).promise;

    // Get the first page
    const page = await pdf.getPage(1);

    // Get the viewport of the page
    const viewport = page.getViewport({ scale: 1.5 });

    // Get the canvas context
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Failed to get the 2D context from the canvas');
    }

    // Set canvas dimensions
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render the page on the canvas
    await page.render({ canvasContext: context, viewport }).promise;

    // Once rendering is complete, set loading to false
    loading = false;
  });
</script>

<CommonPage {title}>
	{#if loading}
  <p>Loading PDF...</p>
	{/if}

	<div class="pdf-container">
		<div class="pdf-fullpage">
			<canvas bind:this={canvas}></canvas>
		</div>
	</div>
</CommonPage>


<style>
  .pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px 0; /* Add padding to the top and bottom */
  }

  .pdf-fullpage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;  /* Make sure the canvas stretches */
    max-width: 100%; /* Prevent the canvas from stretching too much */
  }

  canvas {
    border: 1px solid #ccc;
    width: 100%;
    height: auto;
  }
</style>
