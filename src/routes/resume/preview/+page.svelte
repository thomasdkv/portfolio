<script lang="ts">
  import { onMount } from 'svelte';
  import * as pdfjsLib from 'pdfjs-dist';
  import { base } from '$app/paths';
  import Chip from '$lib/components/Chip/Chip.svelte';


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

  function isMobileDevice(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|windows phone|blackberry|mobile/i.test(userAgent);
  }

  const deviceType = isMobileDevice() ? "Phone" : "PC";
</script>

<CommonPage {title}>
  {#if data}
    {#if deviceType == "Phone"}
      {#if loading}
        <p>Loading PDF...</p>
      {/if}

      <div class="pdf-container">
        <div class="pdf-fullpage">
          <canvas bind:this={canvas}></canvas>
        </div>
      </div>
    {:else}
      <iframe src={data} class="iframe-full" title={title}></iframe>
    {/if}
  {:else}
    <Chip>Ooops! no CV at the moment.</Chip>
  {/if}
</CommonPage>


<style>

  html, body {
    height: 100%;
    margin: 0;
  }

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

  /* Full-screen iframe */
  .iframe-full {
    width: 100%;
    height: 100vh;  /* Full viewport height */
    border: none;
  }
</style>
