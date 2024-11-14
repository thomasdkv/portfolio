<script>
	import { data } from '@data/resume';
</script>

<div class="pdf-fullpage">
	<iframe src={data} class="pdf-iframe" title="PDF Full Page Preview"></iframe>
</div>

<style>
	.pdf-fullpage {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh; /* Full viewport height */
		margin: 0;
	}

	.pdf-iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
