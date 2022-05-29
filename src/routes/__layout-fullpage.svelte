<script lang="ts">

import '../app.css';
import Header from '$lib/header/Header.svelte';
import { Modals, closeModal } from 'svelte-modals';

</script>

<div class="absolute w-screen top-0 z-50">
	<Header />
</div>

<Modals>
  <div slot="backdrop" on:click={closeModal} />
</Modals>

<main>
	<slot />
</main>
