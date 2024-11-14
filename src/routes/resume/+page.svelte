<script>
	import { data, title } from '@data/resume';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
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
			<iframe src={data} class="pdf-preview" title="PDF Preview"></iframe>
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
			height: 800px;
			border: 1px solid #ccc;
			border-radius: 8px;
			margin-top: 20px;
		}
	}
</style>
