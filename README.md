
# Sea-M-S

Sea-M-S is a monorepo-based web framework built with Bun workspaces. It consists of three modules: a backend using ElysiaJS, a frontend using Vite and Svelte, and a common module for shared code. The framework includes an interactive CLI generator script for creating models, views, routes, and controllers based on user input.

**Warning: This project is in early development. Use at your own risk.**

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - A fast all-in-one JavaScript runtime

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gak4u/seams
cd seams
```

2. Install dependencies:

```bash
bun install
```

### Project Structure

- `packages/backend` - ElysiaJS backend
- `packages/frontend` - Vite and Svelte frontend
- `packages/common` - Shared code (models, utilities, etc.)

### Running the Project

To run both the frontend and backend simultaneously, use the following command:

```bash
bun run start
```

This will start the backend server on port 3000 and the frontend development server on port 5173.

### Interactive CLI Generator

Sea-M-S includes an interactive CLI generator for creating models, views, routes, and controllers. To use the generator, run:

```bash
bun run generate
```

Follow the prompts to generate the desired files.

### Adding Routes

You can add routes to your backend using decorators. Here's an example of how to define routes in a controller:

```typescript
// src/controllers/sampleController.ts

import { Get, Post, Put, Delete, Patch } from '@seams/server';

export class SampleController {
  @Get('/hello')
  sayHello() {
    return { message: 'Hello, world!' };
  }

  @Post('/create')
  createItem() {
    return { message: 'Item created!' };
  }

  @Put('/update')
  updateItem() {
    return { message: 'Item updated!' };
  }

  @Delete('/delete')
  deleteItem() {
    return { message: 'Item deleted!' };
  }

  @Patch('/modify')
  modifyItem() {
    return { message: 'Item modified!' };
  }
}
```

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

### License

This project is licensed under the MIT License.

### Contact

For more information, please visit the [GitHub repository](https://github.com/gak4u/seams).

**Warning: This project is in early development. Use at your own risk.**

---

**Note:** Replace any placeholders (like port numbers) if they differ in your setup.
