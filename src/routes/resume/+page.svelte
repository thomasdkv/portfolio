<script lang="ts">
  import { data, title } from '@data/resume';
  import Chip from '$lib/components/Chip/Chip.svelte';
  import CommonPage from '$lib/components/CommonPage.svelte';

  import { onMount } from 'svelte';
  import * as pdfjsLib from 'pdfjs-dist';
  import { base } from '$app/paths';

  let workerSrc = `${base}/documents/pdf.worker.mjs`;

  let canvas: HTMLCanvasElement;
  let loading = true;

  onMount(async () => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

    const pdf = await pdfjsLib.getDocument(data).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.5 });

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get the 2D context from the canvas');
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: context, viewport }).promise;
    loading = false;
  });

  function isMobileDevice(): boolean {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|windows phone|blackberry|mobile/i.test(userAgent);
  }

  const deviceType = isMobileDevice() ? "Phone" : "PC";
</script>

<CommonPage {title}>
  <div class="resume">
    {#if data}
      <a href={data} download>
        <Chip size={'1.25em'}>Download</Chip>
      </a>

      <!-- <a href="/resume/preview" target="_blank">
        <Chip size={'1.25em'}>Open in Full Page</Chip>
      </a> -->

      {#if deviceType == "Phone"}
        {#if loading}
          <p>Loading PDF...</p>
        {/if}
        <div class="pdf-preview">
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
  </div>
</CommonPage>

<style lang="scss">
  /* Ensure the html and body take full height of the viewport */
  html, body {
    height: 100%;
    margin: 0;
  }

  .resume {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: 20px;
    justify-content: flex-start;
  }

  .pdf-preview {
    width: 100%;
    height: 100%;  /* Ensure full height for preview */
  }

  /* For phone view */
  .pdf-fullpage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%; /* Allow canvas to stretch fully */
  }

  canvas {
    width: 100%;   /* Ensure the canvas stretches */
    height: auto;  /* Keep aspect ratio */
    border: 1px solid #ccc;
  }

  /* Full-screen iframe */
  .iframe-full {
		margin-top: 20px;
    width: 100%;
    height: 100vh;  /* Full viewport height */
    border: none;
  }
</style>
