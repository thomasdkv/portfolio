<script lang="ts">
  import { onMount } from 'svelte';
  import { getDocument } from 'pdfjs-dist';  // Use the correct import for PDF.js

  export let src = '';  // PDF file source

  let canvas: HTMLCanvasElement;
  let loadingTask: any;  // Type it as `any` for now, or you can define a more specific type later

  onMount(() => {
    // Initialize the PDF.js viewer once the component is mounted
    const renderPDF = async () => {
      try {
        loadingTask = getDocument(src);
        const pdf = await loadingTask.promise;

        // Get the first page of the PDF
        const page = await pdf.getPage(1);

        // Set the scale of the page
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // Prepare the canvas for rendering
        const context = canvas.getContext('2d');
        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render the page
          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;
        }
      } catch (error) {
        console.error('Error rendering PDF:', error);
      }
    };

    renderPDF();

    return () => {
      if (loadingTask) {
        loadingTask.destroy();
      }
    };
  });
</script>

<div class="pdf-viewer">
  <canvas bind:this={canvas}></canvas>
</div>

<style lang="scss">
  .pdf-viewer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 20px 0;
  }

  canvas {
    width: 100%;
    border: 1px solid #ddd;
  }
</style>
