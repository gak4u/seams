<script lang="ts">
	export let data;
</script>

<table class="table">
	<thead>
		<tr>
			{#each data.body.config?.fields ?? [] as column}
				<th>{column.label}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data.body?.records ?? [] as row}
			<tr>
				{#each data.body.config?.fields ?? [] as column}
					<td>{row[column.name]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
