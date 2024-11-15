<script lang="ts">
	import { data, title } from '@data/resume';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	import { onMount } from 'svelte';
  import * as pdfjsLib from 'pdfjs-dist';
  import { base } from '$app/paths';

  // Path to your PDF worker script
  let workerSrc = `${base}/documents/pdf.worker.mjs`;

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
	<div class="resume">
		{#if data}
			<a href={data} download>
				<Chip size={'1.25em'}>Download</Chip>
			</a>

			<a href="/resume/preview" target="_blank">
				<Chip size={'1.25em'}>Open in Full Page</Chip>
			</a>

			<!-- PDF Preview -->
			<!-- <iframe src={data} class="pdf-preview" title="PDF Preview"></iframe> -->
			<!-- <object data={data} type="application/pdf" class="pdf-preview" title="PDF Preview"></object> -->
			{#if loading}
			<p>Loading PDF...</p>
			{/if}
		
			<div class="pdf-preview">
				<div class="pdf-fullpage">
					<canvas bind:this={canvas}></canvas>
				</div>
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;

		& > a {
			color: inherit;
			margin-bottom: 10px;
		}

		.pdf-preview {
			width: 100%;
			max-width: 800px;
			// height: 800px;
			// border: 2px solid #ccc;
			// border-radius: 8px;
			margin-top: 20px;
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
	}

</style>
