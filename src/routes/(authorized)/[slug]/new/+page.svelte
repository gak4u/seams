<script lang="ts">
	export let data;
</script>

<h2>{data.body.config?.labels?.plural}</h2>
<form method="post">
	{#if data.body.config?.fields?.length === 0}
		<p>No fields have been configured for this collection.</p>
	{:else}
		{#each data.body.config?.fields ?? [] as field}
			<div class="form-group">
				<label for={field.name}>{field.label}</label>
				{#if field.type == 'textarea'}
					<textarea class="form-control" id={field.name} name={field.name} />
				{:else if field.type == 'select'}
					<select class="form-control" id={field.name} name={field.name}>
						{#each field.options ?? [] as option}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				{:else if field.type == 'checkbox'}
					<input
						class="form-check-input"
						type={field.type}
						id={field.name}
						name={field.name}
						value={true}
					/>
					<label class="form-check-label" for={field.name}>{field.label}</label>
				{:else if field.type == 'radio'}
					{#each field.options ?? [] as option}
						<input
							class="form-check-input"
							type={field.type}
							id={field.name}
							name={field.name}
							value={option.value}
						/>
						<label class="form-check-label" for={field.name}>{option.label}</label>
					{/each}
				{:else if field.type == 'file'}\
					<label for={field.name}>Example file input</label>
					<input type="file" class="form-control-file" id={field.name} name={field.name} />
				{:else}
					<input class="form-control" type={field.type} id={field.name} name={field.name} />
				{/if}
			</div>
		{/each}
		<button type="submit" class="btn btn-primary">Submit</button>
	{/if}
</form>
