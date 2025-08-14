// Auto-generated MDX data - DO NOT EDIT
// Generated on 2025-08-13T06:36:04.305Z

export interface MDXData {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  content: string;
  path: string;
  category: string;
}

export const mdxData: Record<string, MDXData[]> = {
  "docs": [
    {
      "id": "docs-00-introduction-index",
      "title": "AI SDK by Vercel",
      "description": "The AI SDK is the TypeScript toolkit for building AI applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.",
      "content": "\n# AI SDK\n\nThe AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.\n\n## Why use the AI SDK?\n\nIntegrating large language models (LLMs) into applications is complicated and heavily dependent on the specific model provider you use.\n\nThe AI SDK standardizes integrating artificial intelligence (AI) models across [supported providers](/docs/foundations/providers-and-models). This enables developers to...",
      "path": "docs/00-introduction/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-01-overview",
      "title": "Overview",
      "description": "An overview of foundational concepts critical to understanding the AI SDK",
      "content": "\n# Overview\n\n<Note>\n  This page is a beginner-friendly introduction to high-level artificial\n  intelligence (AI) concepts. To dive right into implementing the AI SDK, feel\n  free to skip ahead to our [quickstarts](/docs/getting-started) or learn about\n  our [supported models and providers](/docs/foundations/providers-and-models).\n</Note>\n\nThe AI SDK standardizes integrating artificial intelligence (AI) models across [supported providers](/docs/foundations/providers-and-models). This enables deve...",
      "path": "docs/02-foundations/01-overview.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-02-providers-and-models",
      "title": "Providers and Models",
      "description": "Learn about the providers and models available in the AI SDK.",
      "content": "\n# Providers and Models\n\nCompanies such as OpenAI and Anthropic (providers) offer access to a range of large language models (LLMs) with differing strengths and capabilities through their own APIs.\n\nEach provider typically has its own unique method for interfacing with their models, complicating the process of switching providers and increasing the risk of vendor lock-in.\n\nTo solve these challenges, AI SDK Core offers a standardized approach to interacting with LLMs through a [language model spe...",
      "path": "docs/02-foundations/02-providers-and-models.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-03-prompts",
      "title": "Prompts",
      "description": "Learn about the Prompt structure used in the AI SDK.",
      "content": "\n# Prompts\n\nPrompts are instructions that you give a [large language model (LLM)](/docs/foundations/overview#large-language-models) to tell it what to do.\nIt's like when you ask someone for directions; the clearer your question, the better the directions you'll get.\n\nMany LLM providers offer complex interfaces for specifying prompts. They involve different roles and message types.\nWhile these interfaces are powerful, they can be hard to use and understand.\n\nIn order to simplify prompting, the AI...",
      "path": "docs/02-foundations/03-prompts.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-04-tools",
      "title": "Tools",
      "description": "Learn about tools with the AI SDK.",
      "content": "\n# Tools\n\nWhile [large language models (LLMs)](/docs/foundations/overview#large-language-models) have incredible generation capabilities,\nthey struggle with discrete tasks (e.g. mathematics) and interacting with the outside world (e.g. getting the weather).\n\nTools are actions that an LLM can invoke.\nThe results of these actions can be reported back to the LLM to be considered in the next response.\n\nFor example, when you ask an LLM for the \"weather in London\", and there is a weather tool availabl...",
      "path": "docs/02-foundations/04-tools.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-05-streaming",
      "title": "Streaming",
      "description": "Why use streaming for AI applications?",
      "content": "\n# Streaming\n\nStreaming conversational text UIs (like ChatGPT) have gained massive popularity over the past few months. This section explores the benefits and drawbacks of streaming and blocking interfaces.\n\n[Large language models (LLMs)](/docs/foundations/overview#large-language-models) are extremely powerful. However, when generating long outputs, they can be very slow compared to the latency you're likely used to. If you try to build a traditional blocking UI, your users might easily find the...",
      "path": "docs/02-foundations/05-streaming.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-06-agents",
      "title": "Agents",
      "description": "Learn how to build agents with AI SDK Core.",
      "content": "\n# Agents\n\nWhen building AI applications, you often need **systems that can understand context and take meaningful actions**. When building these systems, the key consideration is finding the right balance between flexibility and control. Let's explore different approaches and patterns for building these systems, with a focus on helping you match capabilities to your needs.\n\n## Building Blocks\n\nWhen building AI systems, you can combine these fundamental components:\n\n### Single-Step LLM Generatio...",
      "path": "docs/02-foundations/06-agents.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-foundations-index",
      "title": "Foundations",
      "description": "A section that covers foundational knowledge around LLMs and concepts crucial to the AI SDK",
      "content": "\n# Foundations\n\n<IndexCards\n  cards={[\n    {\n      title: 'Overview',\n      description: 'Learn about foundational concepts around AI and LLMs.',\n      href: '/docs/foundations/overview',\n    },\n    {\n      title: 'Providers and Models',\n      description:\n        'Learn about the providers and models that you can use with the AI SDK.',\n      href: '/docs/foundations/providers-and-models',\n    },\n    {\n      title: 'Prompts',\n      description:\n        'Learn about how Prompts are used and defin...",
      "path": "docs/02-foundations/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-01-navigating-the-library",
      "title": "Navigating the Library",
      "description": "Learn how to navigate the AI SDK.",
      "content": "\n# Navigating the Library\n\nThe AI SDK is a powerful toolkit for building AI applications. This page will help you pick the right tools for your requirements.\n\nLet’s start with a quick overview of the AI SDK, which is comprised of three parts:\n\n- **[AI SDK Core](/docs/ai-sdk-core/overview):** A unified, provider agnostic API for generating text, structured objects, and tool calls with LLMs.\n- **[AI SDK UI](/docs/ai-sdk-ui/overview):** A set of framework-agnostic hooks for building chat and genera...",
      "path": "docs/02-getting-started/01-navigating-the-library.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-02-nextjs-app-router",
      "title": "Next.js App Router",
      "description": "Welcome to the AI SDK quickstart guide for Next.js App Router!",
      "content": "\n# Next.js App Router Quickstart\n\nThe AI SDK is a powerful Typescript library designed to help developers build AI-powered applications.\n\nIn this quickstart tutorial, you'll build a simple AI-chatbot with a streaming user interface. Along the way, you'll learn key concepts and techniques that are fundamental to using the SDK in your own projects.\n\nIf you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming),...",
      "path": "docs/02-getting-started/02-nextjs-app-router.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-03-nextjs-pages-router",
      "title": "Next.js Pages Router",
      "description": "Welcome to the AI SDK quickstart guide for Next.js Pages Router!",
      "content": "\n# Next.js Pages Router Quickstart\n\nThe AI SDK is a powerful Typescript library designed to help developers build AI-powered applications.\n\nIn this quickstart tutorial, you'll build a simple AI-chatbot with a streaming user interface. Along the way, you'll learn key concepts and techniques that are fundamental to using the SDK in your own projects.\n\nIf you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming...",
      "path": "docs/02-getting-started/03-nextjs-pages-router.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-04-svelte",
      "title": "Svelte",
      "description": "Welcome to the AI SDK quickstart guide for Svelte!",
      "content": "\n# Svelte Quickstart\n\nThe AI SDK is a powerful Typescript library designed to help developers build AI-powered applications.\n\nIn this quickstart tutorial, you'll build a simple AI-chatbot with a streaming user interface. Along the way, you'll learn key concepts and techniques that are fundamental to using the SDK in your own projects.\n\nIf you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming), you can opt...",
      "path": "docs/02-getting-started/04-svelte.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-05-nuxt",
      "title": "Vue.js (Nuxt)",
      "description": "Welcome to the AI SDK quickstart guide for Vue.js (Nuxt)!",
      "content": "\n# Vue.js (Nuxt) Quickstart\n\nThe AI SDK is a powerful Typescript library designed to help developers build AI-powered applications.\n\nIn this quickstart tutorial, you'll build a simple AI-chatbot with a streaming user interface. Along the way, you'll learn key concepts and techniques that are fundamental to using the SDK in your own projects.\n\nIf you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming), you ...",
      "path": "docs/02-getting-started/05-nuxt.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-06-nodejs",
      "title": "Node.js",
      "description": "Welcome to the AI SDK quickstart guide for Node.js!",
      "content": "\n# Node.js Quickstart\n\nThe AI SDK is a powerful Typescript library designed to help developers build AI-powered applications.\n\nIn this quickstart tutorial, you'll build a simple AI-chatbot with a streaming user interface. Along the way, you'll learn key concepts and techniques that are fundamental to using the SDK in your own projects.\n\nIf you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming), you can op...",
      "path": "docs/02-getting-started/06-nodejs.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-07-expo",
      "title": "Expo",
      "description": "Welcome to the AI SDK quickstart guide for Expo!",
      "content": "\n# Expo Quickstart\n\nIn this quickstart tutorial, you'll build a simple AI-chatbot with a streaming user interface with [Expo](https://expo.dev/). Along the way, you'll learn key concepts and techniques that are fundamental to using the SDK in your own projects.\n\nIf you are unfamiliar with the concepts of [Prompt Engineering](/docs/advanced/prompt-engineering) and [HTTP Streaming](/docs/advanced/why-streaming), you can optionally read these documents first.\n\n## Prerequisites\n\nTo follow this quick...",
      "path": "docs/02-getting-started/07-expo.mdx",
      "category": "docs"
    },
    {
      "id": "docs-02-getting-started-index",
      "title": "Getting Started",
      "description": "Welcome to the AI SDK documentation!",
      "content": "\n# Getting Started\n\nThe following guides are intended to provide you with an introduction to some of the core features provided by the AI SDK.\n\n<QuickstartFrameworkCards />\n\n## Backend Framework Examples\n\nYou can also use [AI SDK Core](/docs/ai-sdk-core/overview) and [AI SDK UI](/docs/ai-sdk-ui/overview) with the following backend frameworks:\n\n<IndexCards\n  cards={[\n    {\n      title: 'Node.js HTTP Server',\n      description: 'Send AI responses from a Node.js HTTP server.',\n      href: '/example...",
      "path": "docs/02-getting-started/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-01-overview",
      "title": "Overview",
      "description": "An overview of AI SDK Core.",
      "content": "\n# AI SDK Core\n\nLarge Language Models (LLMs) are advanced programs that can understand, create, and engage with human language on a large scale.\nThey are trained on vast amounts of written material to recognize patterns in language and predict what might come next in a given piece of text.\n\nAI SDK Core **simplifies working with LLMs by offering a standardized way of integrating them into your app** - so you can focus on building great AI applications for your users, not waste time on technical d...",
      "path": "docs/03-ai-sdk-core/01-overview.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-05-generating-text",
      "title": "Generating Text",
      "description": "Learn how to generate text with the AI SDK.",
      "content": "\n# Generating and Streaming Text\n\nLarge language models (LLMs) can generate text in response to a prompt, which can contain instructions and information to process.\nFor example, you can ask a model to come up with a recipe, draft an email, or summarize a document.\n\nThe AI SDK Core provides two functions to generate text and stream it from LLMs:\n\n- [`generateText`](#generatetext): Generates text for a given prompt and model.\n- [`streamText`](#streamtext): Streams text from a given prompt and mode...",
      "path": "docs/03-ai-sdk-core/05-generating-text.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-10-generating-structured-data",
      "title": "Generating Structured Data",
      "description": "Learn how to generate structured data with the AI SDK.",
      "content": "\n# Generating Structured Data\n\nWhile text generation can be useful, your use case will likely call for generating structured data.\nFor example, you might want to extract information from text, classify data, or generate synthetic data.\n\nMany language models are capable of generating structured data, often defined as using \"JSON modes\" or \"tools\".\nHowever, you need to manually provide schemas and then validate the generated data as LLMs can produce incorrect or incomplete structured data.\n\nThe AI...",
      "path": "docs/03-ai-sdk-core/10-generating-structured-data.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-15-tools-and-tool-calling",
      "title": "Tool Calling",
      "description": "Learn about tool calling and multi-step calls (using stopWhen) with AI SDK Core.",
      "content": "\n# Tool Calling\n\nAs covered under Foundations, [tools](/docs/foundations/tools) are objects that can be called by the model to perform a specific task.\nAI SDK Core tools contain three elements:\n\n- **`description`**: An optional description of the tool that can influence when the tool is picked.\n- **`inputSchema`**: A [Zod schema](/docs/foundations/tools#schemas) or a [JSON schema](/docs/reference/ai-sdk-core/json-schema) that defines the input parameters. The schema is consumed by the LLM, and a...",
      "path": "docs/03-ai-sdk-core/15-tools-and-tool-calling.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-20-prompt-engineering",
      "title": "Prompt Engineering",
      "description": "Learn how to develop prompts with AI SDK Core.",
      "content": "\n# Prompt Engineering\n\n## Tips\n\n### Prompts for Tools\n\nWhen you create prompts that include tools, getting good results can be tricky as the number and complexity of your tools increases.\n\nHere are a few tips to help you get the best results:\n\n1. Use a model that is strong at tool calling, such as `gpt-4` or `gpt-4.1`. Weaker models will often struggle to call tools effectively and flawlessly.\n1. Keep the number of tools low, e.g. to 5 or less.\n1. Keep the complexity of the tool parameters low. ...",
      "path": "docs/03-ai-sdk-core/20-prompt-engineering.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-25-settings",
      "title": "Settings",
      "description": "Learn how to configure the AI SDK.",
      "content": "\n# Settings\n\nLarge language models (LLMs) typically provide settings to augment their output.\n\nAll AI SDK functions support the following common settings in addition to the model, the [prompt](./prompts), and additional provider-specific settings:\n\n```ts highlight=\"3-5\"\nconst result = await generateText({\n  model: 'openai/gpt-4.1',\n  maxOutputTokens: 512,\n  temperature: 0.3,\n  maxRetries: 5,\n  prompt: 'Invent a new holiday and describe its traditions.',\n});\n```\n\n<Note>\n  Some providers do not su...",
      "path": "docs/03-ai-sdk-core/25-settings.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-30-embeddings",
      "title": "Embeddings",
      "description": "Learn how to embed values with the AI SDK.",
      "content": "\n# Embeddings\n\nEmbeddings are a way to represent words, phrases, or images as vectors in a high-dimensional space.\nIn this space, similar words are close to each other, and the distance between words can be used to measure their similarity.\n\n## Embedding a Single Value\n\nThe AI SDK provides the [`embed`](/docs/reference/ai-sdk-core/embed) function to embed single values, which is useful for tasks such as finding similar words\nor phrases or clustering text.\nYou can use it with embeddings models, e...",
      "path": "docs/03-ai-sdk-core/30-embeddings.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-35-image-generation",
      "title": "Image Generation",
      "description": "Learn how to generate images with the AI SDK.",
      "content": "\n# Image Generation\n\n<Note type=\"warning\">Image generation is an experimental feature.</Note>\n\nThe AI SDK provides the [`generateImage`](/docs/reference/ai-sdk-core/generate-image)\nfunction to generate images based on a given prompt using an image model.\n\n```tsx\nimport { experimental_generateImage as generateImage } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nconst { image } = await generateImage({\n  model: openai.image('dall-e-3'),\n  prompt: 'Santa Claus driving a Cadillac',\n});\n```\n\nY...",
      "path": "docs/03-ai-sdk-core/35-image-generation.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-36-transcription",
      "title": "Transcription",
      "description": "Learn how to transcribe audio with the AI SDK.",
      "content": "\n# Transcription\n\n<Note type=\"warning\">Transcription is an experimental feature.</Note>\n\nThe AI SDK provides the [`transcribe`](/docs/reference/ai-sdk-core/transcribe)\nfunction to transcribe audio using a transcription model.\n\n```ts\nimport { experimental_transcribe as transcribe } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport { readFile } from 'fs/promises';\n\nconst transcript = await transcribe({\n  model: openai.transcription('whisper-1'),\n  audio: await readFile('audio.mp3'),\n});\n`...",
      "path": "docs/03-ai-sdk-core/36-transcription.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-37-speech",
      "title": "Speech",
      "description": "Learn how to generate speech from text with the AI SDK.",
      "content": "\n# Speech\n\n<Note type=\"warning\">Speech is an experimental feature.</Note>\n\nThe AI SDK provides the [`generateSpeech`](/docs/reference/ai-sdk-core/generate-speech)\nfunction to generate speech from text using a speech model.\n\n```ts\nimport { experimental_generateSpeech as generateSpeech } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport { readFile } from 'fs/promises';\n\nconst audio = await generateSpeech({\n  model: openai.speech('tts-1'),\n  text: 'Hello, world!',\n  voice: 'alloy',\n});\n```...",
      "path": "docs/03-ai-sdk-core/37-speech.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-40-middleware",
      "title": "Language Model Middleware",
      "description": "Learn how to use middleware to enhance the behavior of language models",
      "content": "\n# Language Model Middleware\n\nLanguage model middleware is a way to enhance the behavior of language models\nby intercepting and modifying the calls to the language model.\n\nIt can be used to add features like guardrails, RAG, caching, and logging\nin a language model agnostic way. Such middleware can be developed and\ndistributed independently from the language models that they are applied to.\n\n## Using Language Model Middleware\n\nYou can use language model middleware with the `wrapLanguageModel` fu...",
      "path": "docs/03-ai-sdk-core/40-middleware.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-45-provider-management",
      "title": "Provider & Model Management",
      "description": "Learn how to work with multiple providers and models",
      "content": "\n# Provider & Model Management\n\nWhen you work with multiple providers and models, it is often desirable to manage them in a central place\nand access the models through simple string ids.\n\nThe AI SDK offers [custom providers](/docs/reference/ai-sdk-core/custom-provider) and\na [provider registry](/docs/reference/ai-sdk-core/provider-registry) for this purpose:\n\n- With **custom providers**, you can pre-configure model settings, provide model name aliases,\n  and limit the available models.\n- The **p...",
      "path": "docs/03-ai-sdk-core/45-provider-management.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-50-error-handling",
      "title": "Error Handling",
      "description": "Learn how to handle errors in the AI SDK Core",
      "content": "\n# Error Handling\n\n## Handling regular errors\n\nRegular errors are thrown and can be handled using the `try/catch` block.\n\n```ts highlight=\"3,8-10\"\nimport { generateText } from 'ai';\n\ntry {\n  const { text } = await generateText({\n    model: 'openai/gpt-4.1',\n    prompt: 'Write a vegetarian lasagna recipe for 4 people.',\n  });\n} catch (error) {\n  // handle error\n}\n```\n\nSee [Error Types](/docs/reference/ai-sdk-errors) for more information on the different types of errors that may be thrown.\n\n## Han...",
      "path": "docs/03-ai-sdk-core/50-error-handling.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-55-testing",
      "title": "Testing",
      "description": "Learn how to use AI SDK Core mock providers for testing.",
      "content": "\n# Testing\n\nTesting language models can be challenging, because they are non-deterministic\nand calling them is slow and expensive.\n\nTo enable you to unit test your code that uses the AI SDK, the AI SDK Core\nincludes mock providers and test helpers. You can import the following helpers from `ai/test`:\n\n- `MockEmbeddingModelV2`: A mock embedding model using the [embedding model v2 specification](https://github.com/vercel/ai/blob/v5/packages/provider/src/embedding-model/v2/embedding-model-v2.ts).\n-...",
      "path": "docs/03-ai-sdk-core/55-testing.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-60-telemetry",
      "title": "Telemetry",
      "description": "Using OpenTelemetry with AI SDK Core",
      "content": "\n# Telemetry\n\n<Note type=\"warning\">\n  AI SDK Telemetry is experimental and may change in the future.\n</Note>\n\nThe AI SDK uses [OpenTelemetry](https://opentelemetry.io/) to collect telemetry data.\nOpenTelemetry is an open-source observability framework designed to provide\nstandardized instrumentation for collecting telemetry data.\n\nCheck out the [AI SDK Observability Integrations](/providers/observability)\nto see providers that offer monitoring and tracing for AI SDK applications.\n\n## Enabling te...",
      "path": "docs/03-ai-sdk-core/60-telemetry.mdx",
      "category": "docs"
    },
    {
      "id": "docs-03-ai-sdk-core-index",
      "title": "AI SDK Core",
      "description": "Learn about AI SDK Core.",
      "content": "\n# AI SDK Core\n\n<IndexCards\n  cards={[\n    {\n      title: 'Overview',\n      description:\n        'Learn about AI SDK Core and how to work with Large Language Models (LLMs).',\n      href: '/docs/ai-sdk-core/overview',\n    },\n    {\n      title: 'Generating Text',\n      description: 'Learn how to generate text.',\n      href: '/docs/ai-sdk-core/generating-text',\n    },\n    {\n      title: 'Generating Structured Data',\n      description: 'Learn how to generate structured data.',\n      href: '/docs/ai-...",
      "path": "docs/03-ai-sdk-core/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-01-overview",
      "title": "Overview",
      "description": "An overview of AI SDK UI.",
      "content": "\n# AI SDK UI\n\nAI SDK UI is designed to help you build interactive chat, completion, and assistant applications with ease. It is a **framework-agnostic toolkit**, streamlining the integration of advanced AI functionalities into your applications.\n\nAI SDK UI provides robust abstractions that simplify the complex tasks of managing chat streams and UI updates on the frontend, enabling you to develop dynamic AI-driven interfaces more efficiently. With four main hooks — **`useChat`**, **`useCompletion...",
      "path": "docs/04-ai-sdk-ui/01-overview.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-02-chatbot",
      "title": "Chatbot",
      "description": "Learn how to use the useChat hook.",
      "content": "\n# Chatbot\n\nThe `useChat` hook makes it effortless to create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the chat state, and updates the UI automatically as new messages arrive.\n\nTo summarize, the `useChat` hook provides the following features:\n\n- **Message Streaming**: All the messages from the AI provider are streamed to the chat UI in real-time.\n- **Managed States**: The hook manages the states for inpu...",
      "path": "docs/04-ai-sdk-ui/02-chatbot.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-03-chatbot-message-persistence",
      "title": "Chatbot Message Persistence",
      "description": "Learn how to store and load chat messages in a chatbot.",
      "content": "\n# Chatbot Message Persistence\n\nBeing able to store and load chat messages is crucial for most AI chatbots.\nIn this guide, we'll show how to implement message persistence with `useChat` and `streamText`.\n\n<Note>\n  This guide does not cover authorization, error handling, or other real-world\n  considerations. It is intended to be a simple example of how to implement\n  message persistence.\n</Note>\n\n## Starting a new chat\n\nWhen the user navigates to the chat page without providing a chat ID,\nwe need...",
      "path": "docs/04-ai-sdk-ui/03-chatbot-message-persistence.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-03-chatbot-tool-usage",
      "title": "Chatbot Tool Usage",
      "description": "Learn how to use tools with the useChat hook.",
      "content": "\n# Chatbot Tool Usage\n\nWith [`useChat`](/docs/reference/ai-sdk-ui/use-chat) and [`streamText`](/docs/reference/ai-sdk-core/stream-text), you can use tools in your chatbot application.\nThe AI SDK supports three types of tools in this context:\n\n1. Automatically executed server-side tools\n2. Automatically executed client-side tools\n3. Tools that require user interaction, such as confirmation dialogs\n\nThe flow is as follows:\n\n1. The user enters a message in the chat UI.\n1. The message is sent to the...",
      "path": "docs/04-ai-sdk-ui/03-chatbot-tool-usage.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-04-generative-user-interfaces",
      "title": "Generative User Interfaces",
      "description": "Learn how to build Generative UI with AI SDK UI.",
      "content": "\n# Generative User Interfaces\n\nGenerative user interfaces (generative UI) is the process of allowing a large language model (LLM) to go beyond text and \"generate UI\". This creates a more engaging and AI-native experience for users.\n\n<WeatherSearch />\n\nAt the core of generative UI are [ tools ](/docs/ai-sdk-core/tools-and-tool-calling), which are functions you provide to the model to perform specialized tasks like getting the weather in a location. The model can decide when and how to use these t...",
      "path": "docs/04-ai-sdk-ui/04-generative-user-interfaces.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-05-completion",
      "title": "Completion",
      "description": "Learn how to use the useCompletion hook.",
      "content": "\n# Completion\n\nThe `useCompletion` hook allows you to create a user interface to handle text completions in your application. It enables the streaming of text completions from your AI provider, manages the state for chat input, and updates the UI automatically as new messages are received.\n\n<Note>\n  The `useCompletion` hook is now part of the `@ai-sdk/react` package.\n</Note>\n\nIn this guide, you will learn how to use the `useCompletion` hook in your application to generate text completions and st...",
      "path": "docs/04-ai-sdk-ui/05-completion.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-08-object-generation",
      "title": "Object Generation",
      "description": "Learn how to use the useObject hook.",
      "content": "\n# Object Generation\n\n<Note>`useObject` is an experimental feature and only available in React.</Note>\n\nThe [`useObject`](/docs/reference/ai-sdk-ui/use-object) hook allows you to create interfaces that represent a structured JSON object that is being streamed.\n\nIn this guide, you will learn how to use the `useObject` hook in your application to generate UIs for structured data on the fly.\n\n## Example\n\nThe example shows a small notifications demo app that generates fake notifications in real-time...",
      "path": "docs/04-ai-sdk-ui/08-object-generation.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-20-streaming-data",
      "title": "Streaming Custom Data",
      "description": "Learn how to stream custom data from the server to the client.",
      "content": "\n# Streaming Custom Data\n\nIt is often useful to send additional data alongside the model's response.\nFor example, you may want to send status information, the message ids after storing them,\nor references to content that the language model is referring to.\n\nThe AI SDK provides several helpers that allows you to stream additional data to the client\nand attach it to the `UIMessage` parts array:\n\n- `createUIMessageStream`: creates a data stream\n- `createUIMessageStreamResponse`: creates a response ...",
      "path": "docs/04-ai-sdk-ui/20-streaming-data.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-21-error-handling",
      "title": "Error Handling",
      "description": "Learn how to handle errors in the AI SDK UI",
      "content": "\n# Error Handling\n\n### Error Helper Object\n\nEach AI SDK UI hook also returns an [error](/docs/reference/ai-sdk-ui/use-chat#error) object that you can use to render the error in your UI.\nYou can use the error object to show an error message, disable the submit button, or show a retry button.\n\n<Note>\n  We recommend showing a generic error message to the user, such as \"Something\n  went wrong.\" This is a good practice to avoid leaking information from the\n  server.\n</Note>\n\n```tsx file=\"app/page.tsx...",
      "path": "docs/04-ai-sdk-ui/21-error-handling.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-21-transport",
      "title": "Transport",
      "description": "Learn how to use custom transports with useChat.",
      "content": "\n# Transport\n\nThe `useChat` transport system provides fine-grained control over how messages are sent to your API endpoints and how responses are processed. This is particularly useful for alternative communication protocols like WebSockets, custom authentication patterns, or specialized backend integrations.\n\n## Default Transport\n\nBy default, `useChat` uses HTTP POST requests to send messages to `/api/chat`:\n\n```tsx\nimport { useChat } from '@ai-sdk/react';\n\n// Uses default HTTP transport\nconst ...",
      "path": "docs/04-ai-sdk-ui/21-transport.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-24-reading-ui-message-streams",
      "title": "Reading UIMessage Streams",
      "description": "Learn how to read UIMessage streams.",
      "content": "\n# Reading UI Message Streams\n\n`UIMessage` streams are useful outside of traditional chat use cases. You can consume them for terminal UIs, custom stream processing on the client, or React Server Components (RSC).\n\nThe `readUIMessageStream` helper transforms a stream of `UIMessageChunk` objects into an `AsyncIterableStream` of `UIMessage` objects, allowing you to process messages as they're being constructed.\n\n## Basic Usage\n\n```tsx\nimport { openai } from '@ai-sdk/openai';\nimport { readUIMessage...",
      "path": "docs/04-ai-sdk-ui/24-reading-ui-message-streams.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-25-message-metadata",
      "title": "Message Metadata",
      "description": "Learn how to attach and use metadata with messages in AI SDK UI",
      "content": "\n# Message Metadata\n\nMessage metadata allows you to attach custom information to messages at the message level. This is useful for tracking timestamps, model information, token usage, user context, and other message-level data.\n\n## Overview\n\nMessage metadata differs from [data parts](/docs/ai-sdk-ui/streaming-data) in that it's attached at the message level rather than being part of the message content. While data parts are ideal for dynamic content that forms part of the message, metadata is pe...",
      "path": "docs/04-ai-sdk-ui/25-message-metadata.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-50-stream-protocol",
      "title": "Stream Protocols",
      "description": "Learn more about the supported stream protocols in the AI SDK.",
      "content": "\n# Stream Protocols\n\nAI SDK UI functions such as `useChat` and `useCompletion` support both text streams and data streams.\nThe stream protocol defines how the data is streamed to the frontend on top of the HTTP protocol.\n\nThis page describes both protocols and how to use them in the backend and frontend.\n\nYou can use this information to develop custom backends and frontends for your use case, e.g.,\nto provide compatible API endpoints that are implemented in a different language such as Python.\n\n...",
      "path": "docs/04-ai-sdk-ui/50-stream-protocol.mdx",
      "category": "docs"
    },
    {
      "id": "docs-04-ai-sdk-ui-index",
      "title": "AI SDK UI",
      "description": "Learn about the AI SDK UI.",
      "content": "\n# AI SDK UI\n\n<IndexCards\n  cards={[\n    {\n      title: 'Overview',\n      description: 'Get an overview about the AI SDK UI.',\n      href: '/docs/ai-sdk-ui/overview'\n    },\n    {\n      title: 'Chatbot',\n      description: 'Learn how to integrate an interface for a chatbot.',\n      href: '/docs/ai-sdk-ui/chatbot'\n    },\n    {\n      title: 'Chatbot Message Persistence',\n      description: 'Learn how to store and load chat messages in a chatbot.',\n      href: '/docs/ai-sdk-ui/chatbot-message-persis...",
      "path": "docs/04-ai-sdk-ui/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-01-overview",
      "title": "Overview",
      "description": "An overview of AI SDK RSC.",
      "content": "\n# AI SDK RSC\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\n<Note>\n  The `@ai-sdk/rsc` package is compatible with frameworks that support React\n  Server Components.\n</Note>\n\n[React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) (RSC) allow...",
      "path": "docs/05-ai-sdk-rsc/01-overview.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-02-streaming-react-components",
      "title": "Streaming React Components",
      "description": "Overview of streaming RSCs",
      "content": "\nimport { UIPreviewCard, Card } from '@/components/home/card';\nimport { EventPlanning } from '@/components/home/event-planning';\nimport { Searching } from '@/components/home/searching';\nimport { Weather } from '@/components/home/weather';\n\n# Streaming React Components\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrat...",
      "path": "docs/05-ai-sdk-rsc/02-streaming-react-components.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-03-generative-ui-state",
      "title": "Managing Generative UI State",
      "description": "Overview of the AI and UI states",
      "content": "\n# Managing Generative UI State\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nState is an essential part of any application. State is particularly important in AI applications as it is passed to large language models (LLMs) on each request to ensure they have the necessary context to produce a...",
      "path": "docs/05-ai-sdk-rsc/03-generative-ui-state.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-03-saving-and-restoring-states",
      "title": "Saving and Restoring States",
      "description": "Saving and restoring AI and UI states with onGetUIState and onSetAIState",
      "content": "\n# Saving and Restoring States\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nAI SDK RSC provides convenient methods for saving and restoring AI and UI state. This is useful for saving the state of your application after every model generation, and restoring it when the user revisits the genera...",
      "path": "docs/05-ai-sdk-rsc/03-saving-and-restoring-states.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-04-multistep-interfaces",
      "title": "Multistep Interfaces",
      "description": "Overview of Building Multistep Interfaces with AI SDK RSC",
      "content": "\n# Designing Multistep Interfaces\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nMultistep interfaces refer to user interfaces that require multiple independent steps to be executed in order to complete a specific task.\n\nFor example, if you wanted to build a Generative UI chatbot capable of boo...",
      "path": "docs/05-ai-sdk-rsc/04-multistep-interfaces.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-05-streaming-values",
      "title": "Streaming Values",
      "description": "Overview of streaming RSCs",
      "content": "\nimport { UIPreviewCard, Card } from '@/components/home/card';\nimport { EventPlanning } from '@/components/home/event-planning';\nimport { Searching } from '@/components/home/searching';\nimport { Weather } from '@/components/home/weather';\n\n# Streaming Values\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui)...",
      "path": "docs/05-ai-sdk-rsc/05-streaming-values.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-06-loading-state",
      "title": "Handling Loading State",
      "description": "Overview of handling loading state with AI SDK RSC",
      "content": "\n# Handling Loading State\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nGiven that responses from language models can often take a while to complete, it's crucial to be able to show loading state to users. This provides visual feedback that the system is working on their request and helps main...",
      "path": "docs/05-ai-sdk-rsc/06-loading-state.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-08-error-handling",
      "title": "Error Handling",
      "description": "Learn how to handle errors with the AI SDK.",
      "content": "\n# Error Handling\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nTwo categories of errors can occur when working with the RSC API: errors while streaming user interfaces and errors while streaming other values.\n\n## Handling UI Errors\n\nTo handle errors while generating UI, the [`streamableUI`](/...",
      "path": "docs/05-ai-sdk-rsc/08-error-handling.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-09-authentication",
      "title": "Handling Authentication",
      "description": "Learn how to authenticate with the AI SDK.",
      "content": "\n# Authentication\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nThe RSC API makes extensive use of [`Server Actions`](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) to power streaming values and UI from the server.\n\nServer Actions are exposed ...",
      "path": "docs/05-ai-sdk-rsc/09-authentication.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-10-migrating-to-ui",
      "title": "Migrating from RSC to UI",
      "description": "Learn how to migrate from AI SDK RSC to AI SDK UI.",
      "content": "\n# Migrating from RSC to UI\n\nThis guide helps you migrate from AI SDK RSC to AI SDK UI.\n\n## Background\n\nThe AI SDK has two packages that help you build the frontend for your applications – [AI SDK UI](/docs/ai-sdk-ui) and [AI SDK RSC](/docs/ai-sdk-rsc).\n\nWe introduced support for using [React Server Components](https://react.dev/reference/rsc/server-components) (RSC) within the AI SDK to simplify building generative user interfaces for frameworks that support RSC.\n\nHowever, given we're pushing t...",
      "path": "docs/05-ai-sdk-rsc/10-migrating-to-ui.mdx",
      "category": "docs"
    },
    {
      "id": "docs-05-ai-sdk-rsc-index",
      "title": "AI SDK RSC",
      "description": "Learn about AI SDK RSC.",
      "content": "\n# AI SDK RSC\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\n<IndexCards\n  cards={[\n    {\n      title: 'Overview',\n      description: 'Learn about AI SDK RSC.',\n      href: '/docs/ai-sdk-rsc/overview',\n    },\n    {\n      title: 'Streaming React Components',\n      description: 'Learn how to stre...",
      "path": "docs/05-ai-sdk-rsc/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-01-prompt-engineering",
      "title": "Prompt Engineering",
      "description": "Learn how to engineer prompts for LLMs with the AI SDK",
      "content": "\n# Prompt Engineering\n\n## What is a Large Language Model (LLM)?\n\nA Large Language Model is essentially a prediction engine that takes a sequence of words as input and aims to predict the most likely sequence to follow. It does this by assigning probabilities to potential next sequences and then selecting one. The model continues to generate sequences until it meets a specified stopping criterion.\n\nThese models learn by training on massive text corpuses, which means they will be better suited to ...",
      "path": "docs/06-advanced/01-prompt-engineering.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-02-stopping-streams",
      "title": "Stopping Streams",
      "description": "Learn how to cancel streams with the AI SDK",
      "content": "\n# Stopping Streams\n\nCancelling ongoing streams is often needed.\nFor example, users might want to stop a stream when they realize that the response is not what they want.\n\nThe different parts of the AI SDK support cancelling streams in different ways.\n\n## AI SDK Core\n\nThe AI SDK functions have an `abortSignal` argument that you can use to cancel a stream.\nYou would use this if you want to cancel a stream from the server side to the LLM API, e.g. by\nforwarding the `abortSignal` from the request.\n...",
      "path": "docs/06-advanced/02-stopping-streams.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-03-backpressure",
      "title": "Backpressure",
      "description": "How to handle backpressure and cancellation when working with the AI SDK",
      "content": "\n# Stream Back-pressure and Cancellation\n\nThis page focuses on understanding back-pressure and cancellation when working with streams. You do not need to know this information to use the AI SDK, but for those interested, it offers a deeper dive on why and how the SDK optimally streams responses.\n\nIn the following sections, we'll explore back-pressure and cancellation in the context of a simple example program. We'll discuss the issues that can arise from an eager approach and demonstrate how a l...",
      "path": "docs/06-advanced/03-backpressure.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-04-caching",
      "title": "Caching",
      "description": "How to handle caching when working with the AI SDK",
      "content": "\n# Caching Responses\n\nDepending on the type of application you're building, you may want to cache the responses you receive from your AI provider, at least temporarily.\n\n## Using Language Model Middleware (Recommended)\n\nThe recommended approach to caching responses is using [language model middleware](/docs/ai-sdk-core/middleware)\nand the [`simulateReadableStream`](/docs/reference/ai-sdk-core/simulate-readable-stream) function.\n\nLanguage model middleware is a way to enhance the behavior of langu...",
      "path": "docs/06-advanced/04-caching.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-05-multiple-streamables",
      "title": "Multiple Streamables",
      "description": "Learn to handle multiple streamables in your application.",
      "content": "\n# Multiple Streams\n\n## Multiple Streamable UIs\n\nThe AI SDK RSC APIs allow you to compose and return any number of streamable UIs, along with other data, in a single request. This can be useful when you want to decouple the UI into smaller components and stream them separately.\n\n```tsx file='app/actions.tsx'\n'use server';\n\nimport { createStreamableUI } from '@ai-sdk/rsc';\n\nexport async function getWeather() {\n  const weatherUI = createStreamableUI();\n  const forecastUI = createStreamableUI();\n\n ...",
      "path": "docs/06-advanced/05-multiple-streamables.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-06-rate-limiting",
      "title": "Rate Limiting",
      "description": "Learn how to rate limit your application.",
      "content": "\n# Rate Limiting\n\nRate limiting helps you protect your APIs from abuse. It involves setting a\nmaximum threshold on the number of requests a client can make within a\nspecified timeframe. This simple technique acts as a gatekeeper,\npreventing excessive usage that can degrade service performance and incur\nunnecessary costs.\n\n## Rate Limiting with Vercel KV and Upstash Ratelimit\n\nIn this example, you will protect an API endpoint using [Vercel KV](https://vercel.com/storage/kv)\nand [Upstash Ratelimit...",
      "path": "docs/06-advanced/06-rate-limiting.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-07-rendering-ui-with-language-models",
      "title": "Rendering UI with Language Models",
      "description": "Rendering UI with Language Models",
      "content": "\n# Rendering User Interfaces with Language Models\n\nLanguage models generate text, so at first it may seem like you would only need to render text in your application.\n\n```tsx highlight=\"16\" filename=\"app/actions.tsx\"\nconst text = generateText({\n  model: openai('gpt-3.5-turbo'),\n  system: 'You are a friendly assistant',\n  prompt: 'What is the weather in SF?',\n  tools: {\n    getWeather: {\n      description: 'Get the weather for a location',\n      parameters: z.object({\n        city: z.string().des...",
      "path": "docs/06-advanced/07-rendering-ui-with-language-models.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-08-model-as-router",
      "title": "Language Models as Routers",
      "description": "Generative User Interfaces and Language Models as Routers",
      "content": "\n# Generative User Interfaces\n\nSince language models can render user interfaces as part of their generations, the resulting model generations are referred to as generative user interfaces.\n\nIn this section we will learn more about generative user interfaces and their impact on the way AI applications are built.\n\n## Deterministic Routes and Probabilistic Routing\n\nGenerative user interfaces are not deterministic in nature because they depend on the model's generation output. Since these generation...",
      "path": "docs/06-advanced/08-model-as-router.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-09-multistep-interfaces",
      "title": "Multistep Interfaces",
      "description": "Concepts behind building multistep interfaces",
      "content": "\n# Multistep Interfaces\n\nMultistep interfaces refer to user interfaces that require multiple independent steps to be executed in order to complete a specific task.\n\nIn order to understand multistep interfaces, it is important to understand two concepts:\n\n- Tool composition\n- Application context\n\n**Tool composition** is the process of combining multiple [tools](/docs/ai-sdk-core/tools-and-tool-calling) to create a new tool. This is a powerful concept that allows you to break down complex tasks in...",
      "path": "docs/06-advanced/09-multistep-interfaces.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-09-sequential-generations",
      "title": "Sequential Generations",
      "description": "Learn how to implement sequential generations (\"chains\") with the AI SDK",
      "content": "\n# Sequential Generations\n\nWhen working with the AI SDK, you may want to create sequences of generations (often referred to as \"chains\" or \"pipes\"), where the output of one becomes the input for the next. This can be useful for creating more complex AI-powered workflows or for breaking down larger tasks into smaller, more manageable steps.\n\n## Example\n\nIn a sequential chain, the output of one generation is directly used as input for the next generation. This allows you to create a series of depe...",
      "path": "docs/06-advanced/09-sequential-generations.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-10-vercel-deployment-guide",
      "title": "Vercel Deployment Guide",
      "description": "Learn how to deploy an AI application to production on Vercel",
      "content": "\n# Vercel Deployment Guide\n\nIn this guide, you will deploy an AI application to [Vercel](https://vercel.com) using [Next.js](https://nextjs.org) (App Router).\n\nVercel is a platform for developers that provides the tools, workflows, and infrastructure you need to build and deploy your web apps faster, without the need for additional configuration.\n\nVercel allows for automatic deployments on every branch push and merges onto the production branch of your GitHub, GitLab, and Bitbucket projects. It ...",
      "path": "docs/06-advanced/10-vercel-deployment-guide.mdx",
      "category": "docs"
    },
    {
      "id": "docs-06-advanced-index",
      "title": "Advanced",
      "description": "Learn how to use advanced functionality within the AI SDK and RSC API.",
      "content": "\n# Advanced\n\nThis section covers advanced topics and concepts for the AI SDK and RSC API. Working with LLMs often requires a different mental model compared to traditional software development.\n\nAfter these concepts, you should have a better understanding of the paradigms behind the AI SDK and RSC API, and how to use them to build more AI applications.\n...",
      "path": "docs/06-advanced/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-01-generate-text",
      "title": "generateText",
      "description": "API Reference for generateText.",
      "content": "\n# `generateText()`\n\nGenerates text and calls tools for a given prompt using a language model.\n\nIt is ideal for non-interactive use cases such as automation tasks where you need to write text (e.g. drafting email or summarizing web pages) and for agents that use tools.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { generateText } from 'ai';\n\nconst { text } = await generateText({\n  model: openai('gpt-4o'),\n  prompt: 'Invent a new holiday and describe its traditions.',\n});\n\nconsole.log(t...",
      "path": "docs/07-reference/01-ai-sdk-core/01-generate-text.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-02-stream-text",
      "title": "streamText",
      "description": "API Reference for streamText.",
      "content": "\n# `streamText()`\n\nStreams text generations from a language model.\n\nYou can use the streamText function for interactive use cases such as chat bots and other real-time applications. You can also generate UI components with tools.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { streamText } from 'ai';\n\nconst { textStream } = streamText({\n  model: openai('gpt-4o'),\n  prompt: 'Invent a new holiday and describe its traditions.',\n});\n\nfor await (const textPart of textStream) {\n  process.stdo...",
      "path": "docs/07-reference/01-ai-sdk-core/02-stream-text.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-03-generate-object",
      "title": "generateObject",
      "description": "API Reference for generateObject.",
      "content": "\n# `generateObject()`\n\nGenerates a typed, structured object for a given prompt and schema using a language model.\n\nIt can be used to force the language model to return structured data, e.g. for information extraction, synthetic data generation, or classification tasks.\n\n#### Example: generate an object using a schema\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { generateObject } from 'ai';\nimport { z } from 'zod';\n\nconst { object } = await generateObject({\n  model: openai('gpt-4.1'),\n...",
      "path": "docs/07-reference/01-ai-sdk-core/03-generate-object.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-04-stream-object",
      "title": "streamObject",
      "description": "API Reference for streamObject",
      "content": "\n# `streamObject()`\n\nStreams a typed, structured object for a given prompt and schema using a language model.\n\nIt can be used to force the language model to return structured data, e.g. for information extraction, synthetic data generation, or classification tasks.\n\n#### Example: stream an object using a schema\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { streamObject } from 'ai';\nimport { z } from 'zod';\n\nconst { partialObjectStream } = streamObject({\n  model: openai('gpt-4.1'),\n  s...",
      "path": "docs/07-reference/01-ai-sdk-core/04-stream-object.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-05-embed",
      "title": "embed",
      "description": "API Reference for embed.",
      "content": "\n# `embed()`\n\nGenerate an embedding for a single value using an embedding model.\n\nThis is ideal for use cases where you need to embed a single value to e.g. retrieve similar items or to use the embedding in a downstream task.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { embed } from 'ai';\n\nconst { embedding } = await embed({\n  model: openai.textEmbeddingModel('text-embedding-3-small'),\n  value: 'sunny day at the beach',\n});\n```\n\n## Import\n\n<Snippet text={`import { embed } from \"ai\"`}...",
      "path": "docs/07-reference/01-ai-sdk-core/05-embed.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-06-embed-many",
      "title": "embedMany",
      "description": "API Reference for embedMany.",
      "content": "\n# `embedMany()`\n\nEmbed several values using an embedding model. The type of the value is defined\nby the embedding model.\n\n`embedMany` automatically splits large requests into smaller chunks if the model\nhas a limit on how many embeddings can be generated in a single call.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { embedMany } from 'ai';\n\nconst { embeddings } = await embedMany({\n  model: openai.textEmbeddingModel('text-embedding-3-small'),\n  values: [\n    'sunny day at the beach',\n...",
      "path": "docs/07-reference/01-ai-sdk-core/06-embed-many.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-10-generate-image",
      "title": "generateImage",
      "description": "API Reference for generateImage.",
      "content": "\n# `generateImage()`\n\n<Note type=\"warning\">`generateImage` is an experimental feature.</Note>\n\nGenerates images based on a given prompt using an image model.\n\nIt is ideal for use cases where you need to generate images programmatically,\nsuch as creating visual content or generating images for data augmentation.\n\n```ts\nimport { experimental_generateImage as generateImage } from 'ai';\n\nconst { images } = await generateImage({\n  model: openai.image('dall-e-3'),\n  prompt: 'A futuristic cityscape at ...",
      "path": "docs/07-reference/01-ai-sdk-core/10-generate-image.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-11-transcribe",
      "title": "transcribe",
      "description": "API Reference for transcribe.",
      "content": "\n# `transcribe()`\n\n<Note type=\"warning\">`transcribe` is an experimental feature.</Note>\n\nGenerates a transcript from an audio file.\n\n```ts\nimport { experimental_transcribe as transcribe } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport { readFile } from 'fs/promises';\n\nconst { text: transcript } = await transcribe({\n  model: openai.transcription('whisper-1'),\n  audio: await readFile('audio.mp3'),\n});\n\nconsole.log(transcript);\n```\n\n## Import\n\n<Snippet\n  text={`import { experimental_tra...",
      "path": "docs/07-reference/01-ai-sdk-core/11-transcribe.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-12-generate-speech",
      "title": "generateSpeech",
      "description": "API Reference for generateSpeech.",
      "content": "\n# `generateSpeech()`\n\n<Note type=\"warning\">`generateSpeech` is an experimental feature.</Note>\n\nGenerates speech audio from text.\n\n```ts\nimport { experimental_generateSpeech as generateSpeech } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport { readFile } from 'fs/promises';\n\nconst { audio } = await generateSpeech({\n  model: openai.speech('tts-1'),\n  text: 'Hello from the AI SDK!',\n});\n\nconsole.log(audio);\n```\n\n## Import\n\n<Snippet\n  text={`import { experimental_generateSpeech as gener...",
      "path": "docs/07-reference/01-ai-sdk-core/12-generate-speech.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-20-tool",
      "title": "tool",
      "description": "Helper function for tool type inference",
      "content": "\n# `tool()`\n\nTool is a helper function that infers the tool input for its `execute` method.\n\nIt does not have any runtime behavior, but it helps TypeScript infer the types of the input for the `execute` method.\n\nWithout this helper function, TypeScript is unable to connect the `inputSchema` property to the `execute` method,\nand the argument types of `execute` cannot be inferred.\n\n```ts highlight={\"1,4,9,10\"}\nimport { tool } from 'ai';\nimport { z } from 'zod';\n\nexport const weatherTool = tool({\n ...",
      "path": "docs/07-reference/01-ai-sdk-core/20-tool.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-22-dynamic-tool",
      "title": "dynamicTool",
      "description": "Helper function for creating dynamic tools with unknown types",
      "content": "\n# `dynamicTool()`\n\nThe `dynamicTool` function creates tools where the input and output types are not known at compile time. This is useful for scenarios such as:\n\n- MCP (Model Context Protocol) tools without schemas\n- User-defined functions loaded at runtime\n- Tools loaded from external sources or databases\n- Dynamic tool generation based on user input\n\nUnlike the regular `tool` function, `dynamicTool` accepts and returns `unknown` types, allowing you to work with tools that have runtime-determ...",
      "path": "docs/07-reference/01-ai-sdk-core/22-dynamic-tool.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-23-create-mcp-client",
      "title": "experimental_createMCPClient",
      "description": "Create a client for connecting to MCP servers",
      "content": "\n# `experimental_createMCPClient()`\n\nCreates a lightweight Model Context Protocol (MCP) client that connects to an MCP server. The client's primary purpose is tool conversion between MCP tools and AI SDK tools.\n\nIt currently does not support accepting notifications from an MCP server, and custom configuration of the client.\n\nThis feature is experimental and may change or be removed in the future.\n\n## Import\n\n<Snippet\n  text={`import { experimental_createMCPClient } from \"ai\"`}\n  prompt={false}\n/...",
      "path": "docs/07-reference/01-ai-sdk-core/23-create-mcp-client.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-24-mcp-stdio-transport",
      "title": "Experimental_StdioMCPTransport",
      "description": "Create a transport for Model Context Protocol (MCP) clients to communicate with MCP servers using standard input and output streams",
      "content": "\n# `Experimental_StdioMCPTransport`\n\nCreates a transport for Model Context Protocol (MCP) clients to communicate with MCP servers using standard input and output streams. This transport is only supported in Node.js environments.\n\nThis feature is experimental and may change or be removed in the future.\n\n## Import\n\n<Snippet\n  text={`import { Experimental_StdioMCPTransport } from \"ai/mcp-stdio\"`}\n  prompt={false}\n/>\n\n## API Signature\n\n### Parameters\n\n<PropertiesTable\n  content={[\n    {\n      name: ...",
      "path": "docs/07-reference/01-ai-sdk-core/24-mcp-stdio-transport.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-25-json-schema",
      "title": "jsonSchema",
      "description": "Helper function for creating JSON schemas",
      "content": "\n# `jsonSchema()`\n\n`jsonSchema` is a helper function that creates a JSON schema object that is compatible with the AI SDK.\nIt takes the JSON schema and an optional validation function as inputs, and can be typed.\n\nYou can use it to [generate structured data](/docs/ai-sdk-core/generating-structured-data) and in [tools](/docs/ai-sdk-core/tools-and-tool-calling).\n\n`jsonSchema` is an alternative to using Zod schemas that provides you with flexibility in dynamic situations\n(e.g. when using OpenAPI de...",
      "path": "docs/07-reference/01-ai-sdk-core/25-json-schema.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-26-zod-schema",
      "title": "zodSchema",
      "description": "Helper function for creating Zod schemas",
      "content": "\n# `zodSchema()`\n\n`zodSchema` is a helper function that converts a Zod schema into a JSON schema object that is compatible with the AI SDK.\nIt takes a Zod schema and optional configuration as inputs, and returns a typed schema.\n\nYou can use it to [generate structured data](/docs/ai-sdk-core/generating-structured-data) and in [tools](/docs/ai-sdk-core/tools-and-tool-calling).\n\n<Note>\n  You can also pass Zod objects directly to the AI SDK functions. Internally,\n  the AI SDK will convert the Zod sc...",
      "path": "docs/07-reference/01-ai-sdk-core/26-zod-schema.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-27-valibot-schema",
      "title": "valibotSchema",
      "description": "Helper function for creating Valibot schemas",
      "content": "\n# `valibotSchema()`\n\n<Note type=\"warning\">`valibotSchema` is currently experimental.</Note>\n\n`valibotSchema` is a helper function that converts a Valibot schema into a JSON schema object that is compatible with the AI SDK.\nIt takes a Valibot schema as input, and returns a typed schema.\n\nYou can use it to [generate structured data](/docs/ai-sdk-core/generating-structured-data) and in [tools](/docs/ai-sdk-core/tools-and-tool-calling).\n\n## Example\n\n```ts\nimport { valibotSchema } from '@ai-sdk/vali...",
      "path": "docs/07-reference/01-ai-sdk-core/27-valibot-schema.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-30-model-message",
      "title": "ModelMessage",
      "description": "Message types for AI SDK Core (API Reference)",
      "content": "\n# `ModelMessage`\n\n`ModelMessage` represents the fundamental message structure used with AI SDK Core functions.\nIt encompasses various message types that can be used in the `messages` field of any AI SDK Core functions.\n\nYou can access the Zod schema for `ModelMessage` with the `modelMessageSchema` export.\n\n## `ModelMessage` Types\n\n### `SystemModelMessage`\n\nA system message that can contain system information.\n\n```typescript\ntype SystemModelMessage = {\n  role: 'system';\n  content: string;\n};\n```...",
      "path": "docs/07-reference/01-ai-sdk-core/30-model-message.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-31-ui-message",
      "title": "UIMessage",
      "description": "API Reference for UIMessage",
      "content": "\n# `UIMessage`\n\n`UIMessage` serves as the source of truth for your application's state, representing the complete message history including metadata, data parts, and all contextual information. In contrast to `ModelMessage`, which represents the state or context passed to the model, `UIMessage` contains the full application state needed for UI rendering and client-side functionality.\n\n## Type Safety\n\n`UIMessage` is designed to be type-safe and accepts three generic parameters to ensure proper ty...",
      "path": "docs/07-reference/01-ai-sdk-core/31-ui-message.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-40-provider-registry",
      "title": "createProviderRegistry",
      "description": "Registry for managing multiple providers and models (API Reference)",
      "content": "\n# `createProviderRegistry()`\n\nWhen you work with multiple providers and models, it is often desirable to manage them\nin a central place and access the models through simple string ids.\n\n`createProviderRegistry` lets you create a registry with multiple providers that you\ncan access by their ids in the format `providerId:modelId`.\n\n### Setup\n\nYou can create a registry with multiple providers and models using `createProviderRegistry`.\n\n```ts\nimport { anthropic } from '@ai-sdk/anthropic';\nimport { ...",
      "path": "docs/07-reference/01-ai-sdk-core/40-provider-registry.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-42-custom-provider",
      "title": "customProvider",
      "description": "Custom provider that uses models from a different provider (API Reference)",
      "content": "\n# `customProvider()`\n\nWith a custom provider, you can map ids to any model.\nThis allows you to set up custom model configurations, alias names, and more.\nThe custom provider also supports a fallback provider, which is useful for\nwrapping existing providers and adding additional functionality.\n\n### Example: custom model settings\n\nYou can create a custom provider using `customProvider`.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { customProvider } from 'ai';\n\n// custom provider with d...",
      "path": "docs/07-reference/01-ai-sdk-core/42-custom-provider.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-50-cosine-similarity",
      "title": "cosineSimilarity",
      "description": "Calculate the cosine similarity between two vectors (API Reference)",
      "content": "\n# `cosineSimilarity()`\n\nWhen you want to compare the similarity of embeddings, standard vector similarity metrics\nlike cosine similarity are often used.\n\n`cosineSimilarity` calculates the cosine similarity between two vectors.\nA high value (close to 1) indicates that the vectors are very similar, while a low value (close to -1) indicates that they are different.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { cosineSimilarity, embedMany } from 'ai';\n\nconst { embeddings } = await embedM...",
      "path": "docs/07-reference/01-ai-sdk-core/50-cosine-similarity.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-60-wrap-language-model",
      "title": "wrapLanguageModel",
      "description": "Function for wrapping a language model with middleware (API Reference)",
      "content": "\n# `wrapLanguageModel()`\n\nThe `wrapLanguageModel` function provides a way to enhance the behavior of language models\nby wrapping them with middleware.\nSee [Language Model Middleware](/docs/ai-sdk-core/middleware) for more information on middleware.\n\n```ts\nimport { wrapLanguageModel } from 'ai';\n\nconst wrappedLanguageModel = wrapLanguageModel({\n  model: 'openai/gpt-4.1',\n  middleware: yourLanguageModelMiddleware,\n});\n```\n\n## Import\n\n<Snippet text={`import { wrapLanguageModel } from \"ai\"`} prompt=...",
      "path": "docs/07-reference/01-ai-sdk-core/60-wrap-language-model.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-65-language-model-v2-middleware",
      "title": "LanguageModelV2Middleware",
      "description": "Middleware for enhancing language model behavior (API Reference)",
      "content": "\n# `LanguageModelV2Middleware`\n\n<Note type=\"warning\">\n  Language model middleware is an experimental feature.\n</Note>\n\nLanguage model middleware provides a way to enhance the behavior of language models\nby intercepting and modifying the calls to the language model. It can be used to add\nfeatures like guardrails, RAG, caching, and logging in a language model agnostic way.\n\nSee [Language Model Middleware](/docs/ai-sdk-core/middleware) for more information.\n\n## Import\n\n<Snippet\n  text={`import { La...",
      "path": "docs/07-reference/01-ai-sdk-core/65-language-model-v2-middleware.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-66-extract-reasoning-middleware",
      "title": "extractReasoningMiddleware",
      "description": "Middleware that extracts XML-tagged reasoning sections from generated text",
      "content": "\n# `extractReasoningMiddleware()`\n\n`extractReasoningMiddleware` is a middleware function that extracts XML-tagged reasoning sections from generated text and exposes them separately from the main text content. This is particularly useful when you want to separate an AI model's reasoning process from its final output.\n\n```ts\nimport { extractReasoningMiddleware } from 'ai';\n\nconst middleware = extractReasoningMiddleware({\n  tagName: 'reasoning',\n  separator: '\\n',\n});\n```\n\n## Import\n\n<Snippet\n  tex...",
      "path": "docs/07-reference/01-ai-sdk-core/66-extract-reasoning-middleware.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-67-simulate-streaming-middleware",
      "title": "simulateStreamingMiddleware",
      "description": "Middleware that simulates streaming for non-streaming language models",
      "content": "\n# `simulateStreamingMiddleware()`\n\n`simulateStreamingMiddleware` is a middleware function that simulates streaming behavior with responses from non-streaming language models. This is useful when you want to maintain a consistent streaming interface even when using models that only provide complete responses.\n\n```ts\nimport { simulateStreamingMiddleware } from 'ai';\n\nconst middleware = simulateStreamingMiddleware();\n```\n\n## Import\n\n<Snippet\n  text={`import { simulateStreamingMiddleware } from \"ai...",
      "path": "docs/07-reference/01-ai-sdk-core/67-simulate-streaming-middleware.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-68-default-settings-middleware",
      "title": "defaultSettingsMiddleware",
      "description": "Middleware that applies default settings for language models",
      "content": "\n# `defaultSettingsMiddleware()`\n\n`defaultSettingsMiddleware` is a middleware function that applies default settings to language model calls. This is useful when you want to establish consistent default parameters across multiple model invocations.\n\n```ts\nimport { defaultSettingsMiddleware } from 'ai';\n\nconst middleware = defaultSettingsMiddleware({\n  settings: {\n    temperature: 0.7,\n    maxOutputTokens: 1000,\n    // other settings...\n  },\n});\n```\n\n## Import\n\n<Snippet\n  text={`import { defaultS...",
      "path": "docs/07-reference/01-ai-sdk-core/68-default-settings-middleware.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-70-step-count-is",
      "title": "stepCountIs",
      "description": "API Reference for stepCountIs.",
      "content": "\n# `stepCountIs()`\n\nCreates a stop condition that stops when the number of steps reaches a specified count.\n\nThis function is used with `stopWhen` in `generateText` and `streamText` to control when a tool-calling loop should stop based on the number of steps executed.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { generateText, stepCountIs } from 'ai';\n\nconst result = await generateText({\n  model: openai('gpt-4o'),\n  tools: {\n    // your tools\n  },\n  // Stop after 5 steps\n  stopWhen: s...",
      "path": "docs/07-reference/01-ai-sdk-core/70-step-count-is.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-71-has-tool-call",
      "title": "hasToolCall",
      "description": "API Reference for hasToolCall.",
      "content": "\n# `hasToolCall()`\n\nCreates a stop condition that stops when a specific tool is called.\n\nThis function is used with `stopWhen` in `generateText` and `streamText` to control when a tool-calling loop should stop based on whether a particular tool has been invoked.\n\n```ts\nimport { openai } from '@ai-sdk/openai';\nimport { generateText, hasToolCall } from 'ai';\n\nconst result = await generateText({\n  model: openai('gpt-4o'),\n  tools: {\n    weather: weatherTool,\n    finalAnswer: finalAnswerTool,\n  },\n ...",
      "path": "docs/07-reference/01-ai-sdk-core/71-has-tool-call.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-75-simulate-readable-stream",
      "title": "simulateReadableStream",
      "description": "Create a ReadableStream that emits values with configurable delays",
      "content": "\n# `simulateReadableStream()`\n\n`simulateReadableStream` is a utility function that creates a ReadableStream which emits provided values sequentially with configurable delays. This is particularly useful for testing streaming functionality or simulating time-delayed data streams.\n\n```ts\nimport { simulateReadableStream } from 'ai';\n\nconst stream = simulateReadableStream({\n  chunks: ['Hello', ' ', 'World'],\n  initialDelayInMs: 100,\n  chunkDelayInMs: 50,\n});\n```\n\n## Import\n\n<Snippet text={`import { ...",
      "path": "docs/07-reference/01-ai-sdk-core/75-simulate-readable-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-80-smooth-stream",
      "title": "smoothStream",
      "description": "Stream transformer for smoothing text output",
      "content": "\n# `smoothStream()`\n\n`smoothStream` is a utility function that creates a TransformStream\nfor the `streamText` `transform` option\nto smooth out text streaming by buffering and releasing complete words with configurable delays.\nThis creates a more natural reading experience when streaming text responses.\n\n```ts highlight={\"6-9\"}\nimport { smoothStream, streamText } from 'ai';\n\nconst result = streamText({\n  model,\n  prompt,\n  experimental_transform: smoothStream({\n    delayInMs: 20, // optional: def...",
      "path": "docs/07-reference/01-ai-sdk-core/80-smooth-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-90-generate-id",
      "title": "generateId",
      "description": "Generate a unique identifier (API Reference)",
      "content": "\n# `generateId()`\n\nGenerates a unique identifier. You can optionally provide the length of the ID.\n\nThis is the same id generator used by the AI SDK.\n\n```ts\nimport { generateId } from 'ai';\n\nconst id = generateId();\n```\n\n## Import\n\n<Snippet text={`import { generateId } from \"ai\"`} prompt={false} />\n\n## API Signature\n\n### Parameters\n\n<PropertiesTable\n  content={[\n    {\n      name: 'size',\n      type: 'number',\n      description:\n        'The length of the generated ID. It defaults to 16. This par...",
      "path": "docs/07-reference/01-ai-sdk-core/90-generate-id.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-91-create-id-generator",
      "title": "createIdGenerator",
      "description": "Create a customizable unique identifier generator (API Reference)",
      "content": "\n# `createIdGenerator()`\n\nCreates a customizable ID generator function. You can configure the alphabet, prefix, separator, and default size of the generated IDs.\n\n```ts\nimport { createIdGenerator } from 'ai';\n\nconst generateCustomId = createIdGenerator({\n  prefix: 'user',\n  separator: '_',\n});\n\nconst id = generateCustomId(); // Example: \"user_1a2b3c4d5e6f7g8h\"\n```\n\n## Import\n\n<Snippet text={`import { createIdGenerator } from \"ai\"`} prompt={false} />\n\n## API Signature\n\n### Parameters\n\n<Properties...",
      "path": "docs/07-reference/01-ai-sdk-core/91-create-id-generator.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-01-ai-sdk-core-index",
      "title": "AI SDK Core",
      "description": "Reference documentation for the AI SDK Core",
      "content": "\n# AI SDK Core\n\n[AI SDK Core](/docs/ai-sdk-core) is a set of functions that allow you to interact with language models and other AI models.\nThese functions are designed to be easy-to-use and flexible, allowing you to generate text, structured data,\nand embeddings from language models and other AI models.\n\nAI SDK Core contains the following main functions:\n\n<IndexCards\n  cards={[\n    {\n      title: 'generateText()',\n      description: 'Generate text and call tools from a language model.',\n      h...",
      "path": "docs/07-reference/01-ai-sdk-core/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-01-use-chat",
      "title": "useChat",
      "description": "API reference for the useChat hook.",
      "content": "\n# `useChat()`\n\nAllows you to easily create a conversational user interface for your chatbot application. It enables the streaming of chat messages from your AI provider, manages the chat state, and updates the UI automatically as new messages are received.\n\n<Note>\n  The `useChat` API has been significantly updated in AI SDK 5.0. It now uses a\n  transport-based architecture and no longer manages input state internally. See\n  the [migration\n  guide](/docs/migration-guides/migration-guide-5-0#usec...",
      "path": "docs/07-reference/02-ai-sdk-ui/01-use-chat.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-02-use-completion",
      "title": "useCompletion",
      "description": "API reference for the useCompletion hook.",
      "content": "\n# `useCompletion()`\n\nAllows you to create text completion based capabilities for your application. It enables the streaming of text completions from your AI provider, manages the state for chat input, and updates the UI automatically as new messages are received.\n\n## Import\n\n<Tabs items={['React', 'Svelte', 'Vue']}>\n  <Tab>\n    <Snippet\n      text=\"import { useCompletion } from '@ai-sdk/react'\"\n      dark\n      prompt={false}\n    />\n  </Tab>\n  <Tab>\n    <Snippet\n      text=\"import { Completion ...",
      "path": "docs/07-reference/02-ai-sdk-ui/02-use-completion.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-03-use-object",
      "title": "useObject",
      "description": "API reference for the useObject hook.",
      "content": "\n# `experimental_useObject()`\n\n<Note>\n  `useObject` is an experimental feature and only available in React and Svelte.\n</Note>\n\nAllows you to consume text streams that represent a JSON object and parse them into a complete object based on a schema.\nYou can use it together with [`streamObject`](/docs/reference/ai-sdk-core/stream-object) in the backend.\n\n```tsx\n'use client';\n\nimport { experimental_useObject as useObject } from '@ai-sdk/react';\n\nexport default function Page() {\n  const { object, su...",
      "path": "docs/07-reference/02-ai-sdk-ui/03-use-object.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-31-convert-to-model-messages",
      "title": "convertToModelMessages",
      "description": "Convert useChat messages to ModelMessages for AI functions (API Reference)",
      "content": "\n# `convertToModelMessages()`\n\nThe `convertToModelMessages` function is used to transform an array of UI messages from the `useChat` hook into an array of `ModelMessage` objects. These `ModelMessage` objects are compatible with AI core functions like `streamText`.\n\n```ts filename=\"app/api/chat/route.ts\"\nimport { openai } from '@ai-sdk/openai';\nimport { convertToModelMessages, streamText } from 'ai';\n\nexport async function POST(req: Request) {\n  const { messages } = await req.json();\n\n  const res...",
      "path": "docs/07-reference/02-ai-sdk-ui/31-convert-to-model-messages.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-40-create-ui-message-stream",
      "title": "createUIMessageStream",
      "description": "API Reference for createUIMessageStream.",
      "content": "\n# `createUIMessageStream`\n\nThe `createUIMessageStream` function allows you to create a readable stream for UI messages with advanced features like message merging, error handling, and finish callbacks.\n\n## Import\n\n<Snippet text={`import { createUIMessageStream } from \"ai\"`} prompt={false} />\n\n## Example\n\n```tsx\nconst existingMessages: UIMessage[] = [\n  /* ... */\n];\n\nconst stream = createUIMessageStream({\n  async execute({ writer }) {\n    // Write a message chunk\n    writer.write({\n      type: '...",
      "path": "docs/07-reference/02-ai-sdk-ui/40-create-ui-message-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-41-create-ui-message-stream-response",
      "title": "createUIMessageStreamResponse",
      "description": "API Reference for createUIMessageStreamResponse.",
      "content": "\n# `createUIMessageStreamResponse`\n\nThe `createUIMessageStreamResponse` function creates a Response object that streams UI messages to the client.\n\n## Import\n\n<Snippet\n  text={`import { createUIMessageStreamResponse } from \"ai\"`}\n  prompt={false}\n/>\n\n## Example\n\n```tsx\nimport { createUIMessageStream, createUIMessageStreamResponse } from 'ai';\n\nconst response = createUIMessageStreamResponse({\n  status: 200,\n  statusText: 'OK',\n  headers: {\n    'Custom-Header': 'value',\n  },\n  stream: createUIMess...",
      "path": "docs/07-reference/02-ai-sdk-ui/41-create-ui-message-stream-response.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-42-pipe-ui-message-stream-to-response",
      "title": "pipeUIMessageStreamToResponse",
      "description": "Learn to use pipeUIMessageStreamToResponse helper function to pipe streaming data to a ServerResponse object.",
      "content": "\n# `pipeUIMessageStreamToResponse`\n\nThe `pipeUIMessageStreamToResponse` function pipes streaming data to a Node.js ServerResponse object (see [Streaming Data](/docs/ai-sdk-ui/streaming-data)).\n\n## Import\n\n<Snippet\n  text={`import { pipeUIMessageStreamToResponse } from \"ai\"`}\n  prompt={false}\n/>\n\n## Example\n\n```tsx\npipeUIMessageStreamToResponse({\n  response: serverResponse,\n  status: 200,\n  statusText: 'OK',\n  headers: {\n    'Custom-Header': 'value',\n  },\n  stream: myUIMessageStream,\n  consumeSse...",
      "path": "docs/07-reference/02-ai-sdk-ui/42-pipe-ui-message-stream-to-response.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-43-read-ui-message-stream",
      "title": "readUIMessageStream",
      "description": "API Reference for readUIMessageStream.",
      "content": "\n# readUIMessageStream\n\nTransforms a stream of `UIMessageChunk`s into an `AsyncIterableStream` of `UIMessage`s.\n\nUI message streams are useful outside of Chat use cases, e.g. for terminal UIs, custom stream consumption on the client, or RSC (React Server Components).\n\n## Import\n\n```tsx\nimport { readUIMessageStream } from 'ai';\n```\n\n## API Signature\n\n### Parameters\n\n<PropertiesTable\n  content={[\n    {\n      name: 'message',\n      type: 'UIMessage',\n      isOptional: true,\n      description:\n     ...",
      "path": "docs/07-reference/02-ai-sdk-ui/43-read-ui-message-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-46-infer-ui-tools",
      "title": "InferUITools",
      "description": "API Reference for InferUITools.",
      "content": "\n# InferUITools\n\nInfers the input and output types of a `ToolSet`.\n\nThis type helper is useful when working with tools in TypeScript to ensure type safety for your tool inputs and outputs in `UIMessage`s.\n\n## Import\n\n```tsx\nimport { InferUITools } from 'ai';\n```\n\n## API Signature\n\n### Type Parameters\n\n<PropertiesTable\n  content={[\n    {\n      name: 'TOOLS',\n      type: 'ToolSet',\n      description: 'The tool set to infer types from.',\n    },\n  ]}\n/>\n\n### Returns\n\nA type that maps each tool in th...",
      "path": "docs/07-reference/02-ai-sdk-ui/46-infer-ui-tools.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-47-infer-ui-tool",
      "title": "InferUITool",
      "description": "API Reference for InferUITool.",
      "content": "\n# InferUITool\n\nInfers the input and output types of a tool.\n\nThis type helper is useful when working with individual tools to ensure type safety for your tool inputs and outputs in `UIMessage`s.\n\n## Import\n\n```tsx\nimport { InferUITool } from 'ai';\n```\n\n## API Signature\n\n### Type Parameters\n\n<PropertiesTable\n  content={[\n    {\n      name: 'TOOL',\n      type: 'Tool',\n      description: 'The tool to infer types from.',\n    },\n  ]}\n/>\n\n### Returns\n\nA type that contains the inferred input and output...",
      "path": "docs/07-reference/02-ai-sdk-ui/47-infer-ui-tool.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-02-ai-sdk-ui-index",
      "title": "AI SDK UI",
      "description": "Reference documentation for the AI SDK UI",
      "content": "\n# AI SDK UI\n\n[AI SDK UI](/docs/ai-sdk-ui) is designed to help you build interactive chat, completion, and assistant applications with ease.\nIt is framework-agnostic toolkit, streamlining the integration of advanced AI functionalities into your applications.\n\nAI SDK UI contains the following hooks:\n\n<IndexCards\n  cards={[\n    {\n      title: 'useChat',\n      description:\n        'Use a hook to interact with language models in a chat interface.',\n      href: '/docs/reference/ai-sdk-ui/use-chat',\n ...",
      "path": "docs/07-reference/02-ai-sdk-ui/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-01-stream-ui",
      "title": "streamUI",
      "description": "Reference for the streamUI function from the AI SDK RSC",
      "content": "\n# `streamUI`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nA helper function to create a streamable UI from LLM providers. This function is similar to AI SDK Core APIs and supports the same model interfaces.\n\nTo see `streamUI` in action, check out [these examples](#examples).\n\n## Import\n\n<Sni...",
      "path": "docs/07-reference/03-ai-sdk-rsc/01-stream-ui.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-02-create-ai",
      "title": "createAI",
      "description": "Reference for the createAI function from the AI SDK RSC",
      "content": "\n# `createAI`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nCreates a client-server context provider that can be used to wrap parts of your application tree to easily manage both UI and AI states of your application.\n\n## Import\n\n<Snippet text={`import { createAI } from \"@ai-sdk/rsc\"`} prompt={...",
      "path": "docs/07-reference/03-ai-sdk-rsc/02-create-ai.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-03-create-streamable-ui",
      "title": "createStreamableUI",
      "description": "Reference for the createStreamableUI function from the AI SDK RSC",
      "content": "\n# `createStreamableUI`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nCreate a stream that sends UI from the server to the client. On the client side, it can be rendered as a normal React node.\n\n## Import\n\n<Snippet\n  text={`import { createStreamableUI } from \"@ai-sdk/rsc\"`}\n  prompt={false}\n/>...",
      "path": "docs/07-reference/03-ai-sdk-rsc/03-create-streamable-ui.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-04-create-streamable-value",
      "title": "createStreamableValue",
      "description": "Reference for the createStreamableValue function from the AI SDK RSC",
      "content": "\n# `createStreamableValue`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nCreate a stream that sends values from the server to the client. The value can be any serializable data.\n\n## Import\n\n<Snippet\n  text={`import { createStreamableValue } from \"@ai-sdk/rsc\"`}\n  prompt={false}\n/>\n\n## API Sign...",
      "path": "docs/07-reference/03-ai-sdk-rsc/04-create-streamable-value.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-05-read-streamable-value",
      "title": "readStreamableValue",
      "description": "Reference for the readStreamableValue function from the AI SDK RSC",
      "content": "\n# `readStreamableValue`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nIt is a function that helps you read the streamable value from the client that was originally created using [`createStreamableValue`](/docs/reference/ai-sdk-rsc/create-streamable-value) on the server.\n\n## Import\n\n<Snippet\n ...",
      "path": "docs/07-reference/03-ai-sdk-rsc/05-read-streamable-value.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-06-get-ai-state",
      "title": "getAIState",
      "description": "Reference for the getAIState function from the AI SDK RSC",
      "content": "\n# `getAIState`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nGet the current AI state.\n\n## Import\n\n<Snippet text={`import { getAIState } from \"@ai-sdk/rsc\"`} prompt={false} />\n\n## API Signature\n\n### Parameters\n\n<PropertiesTable\n  content={[\n    {\n      name: 'key',\n      type: 'string',\n     ...",
      "path": "docs/07-reference/03-ai-sdk-rsc/06-get-ai-state.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-07-get-mutable-ai-state",
      "title": "getMutableAIState",
      "description": "Reference for the getMutableAIState function from the AI SDK RSC",
      "content": "\n# `getMutableAIState`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nGet a mutable copy of the AI state. You can use this to update the state in the server.\n\n## Import\n\n<Snippet\n  text={`import { getMutableAIState } from \"@ai-sdk/rsc\"`}\n  prompt={false}\n/>\n\n## API Signature\n\n### Parameters\n\n<P...",
      "path": "docs/07-reference/03-ai-sdk-rsc/07-get-mutable-ai-state.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-08-use-ai-state",
      "title": "useAIState",
      "description": "Reference for the useAIState function from the AI SDK RSC",
      "content": "\n# `useAIState`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nIt is a hook that enables you to read and update the AI state. The AI state is shared globally between all `useAIState` hooks under the same `<AI/>` provider.\n\nThe AI state is intended to contain context and information shared with ...",
      "path": "docs/07-reference/03-ai-sdk-rsc/08-use-ai-state.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-09-use-actions",
      "title": "useActions",
      "description": "Reference for the useActions function from the AI SDK RSC",
      "content": "\n# `useActions`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nIt is a hook to help you access your Server Actions from the client. This is particularly useful for building interfaces that require user interactions with the server.\n\nIt is required to access these server actions via this hook be...",
      "path": "docs/07-reference/03-ai-sdk-rsc/09-use-actions.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-10-use-ui-state",
      "title": "useUIState",
      "description": "Reference for the useUIState function from the AI SDK RSC",
      "content": "\n# `useUIState`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nIt is a hook that enables you to read and update the UI State. The state is client-side and can contain functions, React nodes, and other data. UIState is the visual representation of the AI state.\n\n## Import\n\n<Snippet text={`import...",
      "path": "docs/07-reference/03-ai-sdk-rsc/10-use-ui-state.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-11-use-streamable-value",
      "title": "useStreamableValue",
      "description": "Reference for the useStreamableValue function from the AI SDK RSC",
      "content": "\n# `useStreamableValue`\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nIt is a React hook that takes a streamable value created using [`createStreamableValue`](/docs/reference/ai-sdk-rsc/create-streamable-value) and returns the current value, error, and pending state.\n\n## Import\n\n<Snippet\n  tex...",
      "path": "docs/07-reference/03-ai-sdk-rsc/11-use-streamable-value.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-20-render",
      "title": "render (Removed)",
      "description": "Reference for the render function from the AI SDK RSC",
      "content": "\n# `render` (Removed)\n\n<Note type=\"warning\">\"render\" has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\nA helper function to create a streamable UI from LLM providers. This function is similar to AI SDK Core APIs and supports the same model interfaces.\n\n> **No...",
      "path": "docs/07-reference/03-ai-sdk-rsc/20-render.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-03-ai-sdk-rsc-index",
      "title": "AI SDK RSC",
      "description": "Reference documentation for the AI SDK UI",
      "content": "\n# AI SDK RSC\n\n<Note type=\"warning\">\n  AI SDK RSC is currently experimental. We recommend using [AI SDK\n  UI](/docs/ai-sdk-ui/overview) for production. For guidance on migrating from\n  RSC to UI, see our [migration guide](/docs/ai-sdk-rsc/migrating-to-ui).\n</Note>\n\n<IndexCards\n  cards={[\n    {\n      title: 'streamUI',\n      description:\n        'Use a helper function that streams React Server Components on tool execution.',\n      href: '/docs/reference/ai-sdk-rsc/stream-ui',\n    },\n    {\n      t...",
      "path": "docs/07-reference/03-ai-sdk-rsc/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-01-ai-stream",
      "title": "AIStream",
      "description": "Learn to use AIStream helper function in your application.",
      "content": "\n# `AIStream`\n\n<Note type=\"warning\">\n  AIStream has been removed in AI SDK 4.0. Use\n  `streamText.toDataStreamResponse()` instead.\n</Note>\n\nCreates a readable stream for AI responses. This is based on the responses returned\nby fetch and serves as the basis for the OpenAIStream and AnthropicStream. It allows\nyou to handle AI response streams in a controlled and customized manner that will\nwork with useChat and useCompletion.\n\nAIStream will throw an error if response doesn't have a 2xx status code...",
      "path": "docs/07-reference/04-stream-helpers/01-ai-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-02-streaming-text-response",
      "title": "StreamingTextResponse",
      "description": "Learn to use StreamingTextResponse helper function in your application.",
      "content": "\n# `StreamingTextResponse`\n\n<Note type=\"warning\">\n  `StreamingTextResponse` has been removed in AI SDK 4.0. Use\n  [`streamText.toDataStreamResponse()`](/docs/reference/ai-sdk-core/stream-text)\n  instead.\n</Note>\n\nIt is a utility class that simplifies the process of returning a ReadableStream of text in HTTP responses.\nIt is a lightweight wrapper around the native Response class, automatically setting the status code to 200 and the Content-Type header to 'text/plain; charset=utf-8'.\n\n## Import\n\n<...",
      "path": "docs/07-reference/04-stream-helpers/02-streaming-text-response.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-05-stream-to-response",
      "title": "streamToResponse",
      "description": "Learn to use streamToResponse helper function in your application.",
      "content": "\n# `streamToResponse`\n\n<Note type=\"warning\">\n  `streamToResponse` has been removed in AI SDK 4.0. Use\n  `pipeDataStreamToResponse` from\n  [streamText](/docs/reference/ai-sdk-core/stream-text) instead.\n</Note>\n\n`streamToResponse` pipes a data stream to a Node.js `ServerResponse` object and sets the status code and headers.\n\nThis is useful to create data stream responses in environments that use `ServerResponse` objects, such as Node.js HTTP servers.\n\nThe status code and headers can be configured ...",
      "path": "docs/07-reference/04-stream-helpers/05-stream-to-response.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-07-openai-stream",
      "title": "OpenAIStream",
      "description": "Learn to use OpenAIStream helper function in your application.",
      "content": "\n# `OpenAIStream`\n\n<Note type=\"warning\">OpenAIStream has been removed in AI SDK 4.0</Note>\n\n<Note type=\"warning\">\n  OpenAIStream is part of the legacy OpenAI integration. It is not compatible\n  with the AI SDK 3.1 functions. It is recommended to use the [AI SDK OpenAI\n  Provider](/providers/ai-sdk-providers/openai) instead.\n</Note>\n\nTransforms the response from OpenAI's language models into a ReadableStream.\n\nNote: Prior to v4, the official OpenAI API SDK does not support the Edge Runtime and on...",
      "path": "docs/07-reference/04-stream-helpers/07-openai-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-08-anthropic-stream",
      "title": "AnthropicStream",
      "description": "Learn to use AnthropicStream helper function in your application.",
      "content": "\n# `AnthropicStream`\n\n<Note type=\"warning\">AnthropicStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  AnthropicStream is part of the legacy Anthropic integration. It is not\n  compatible with the AI SDK 3.1 functions. It is recommended to use the [AI SDK\n  Anthropic Provider](/providers/ai-sdk-providers/anthropic) instead.\n</Note>\n\nIt is a utility function that transforms the output from Anthropic's SDK into a ReadableStream. It uses AIStream under the hood, applying a specif...",
      "path": "docs/07-reference/04-stream-helpers/08-anthropic-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-09-aws-bedrock-stream",
      "title": "AWSBedrockStream",
      "description": "Learn to use AWSBedrockStream helper function in your application.",
      "content": "\n# `AWSBedrockStream`\n\n<Note type=\"warning\">AWSBedrockStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  AWSBedrockStream is part of the legacy AWS Bedrock integration. It is not\n  compatible with the AI SDK 3.1 functions.\n</Note>\n\nThe AWS Bedrock stream functions are utilties that transform the outputs from the AWS Bedrock API into a ReadableStream. It uses AIStream under the hood and handle parsing Bedrock's response.\n\n## Import\n\n### React\n\n<Snippet text={`import { AWSBedro...",
      "path": "docs/07-reference/04-stream-helpers/09-aws-bedrock-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-10-aws-bedrock-anthropic-stream",
      "title": "AWSBedrockAnthropicStream",
      "description": "Learn to use AWSBedrockAnthropicStream helper function in your application.",
      "content": "\n# `AWSBedrockAnthropicStream`\n\n<Note type=\"warning\">\n  AWSBedrockAnthropicStream has been removed in AI SDK 4.0.\n</Note>\n\n<Note type=\"warning\">\n  AWSBedrockAnthropicStream is part of the legacy AWS Bedrock integration. It is\n  not compatible with the AI SDK 3.1 functions.\n</Note>\n\nThe AWS Bedrock stream functions are utilties that transform the outputs from the AWS Bedrock API into a ReadableStream. It uses AIStream under the hood and handle parsing Bedrock's response.\n\n## Import\n\n### React\n\n<S...",
      "path": "docs/07-reference/04-stream-helpers/10-aws-bedrock-anthropic-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-10-aws-bedrock-messages-stream",
      "title": "AWSBedrockAnthropicMessagesStream",
      "description": "Learn to use AWSBedrockAnthropicMessagesStream helper function in your application.",
      "content": "\n# `AWSBedrockAnthropicMessagesStream`\n\n<Note type=\"warning\">\n  AWSBedrockAnthropicMessagesStream has been removed in AI SDK 4.0.\n</Note>\n\n<Note type=\"warning\">\n  AWSBedrockAnthropicMessagesStream is part of the legacy AWS Bedrock\n  integration. It is not compatible with the AI SDK 3.1 functions.\n</Note>\n\nThe AWS Bedrock stream functions are utilties that transform the outputs from the AWS Bedrock API into a ReadableStream. It uses AIStream under the hood and handle parsing Bedrock's response.\n\n...",
      "path": "docs/07-reference/04-stream-helpers/10-aws-bedrock-messages-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-11-aws-bedrock-cohere-stream",
      "title": "AWSBedrockCohereStream",
      "description": "Learn to use AWSBedrockCohereStream helper function in your application.",
      "content": "\n# `AWSBedrockCohereStream`\n\n<Note type=\"warning\">\n  AWSBedrockCohereStream has been removed in AI SDK 4.0.\n</Note>\n\n<Note type=\"warning\">\n  AWSBedrockCohereStream is part of the legacy AWS Bedrock integration. It is\n  not compatible with the AI SDK 3.1 functions.\n</Note>\n\n## Import\n\nThe AWS Bedrock stream functions are utilties that transform the outputs from the AWS Bedrock API into a ReadableStream. It uses AIStream under the hood and handles parsing Bedrock's response.\n\n### React\n\n<Snippet t...",
      "path": "docs/07-reference/04-stream-helpers/11-aws-bedrock-cohere-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-12-aws-bedrock-llama-2-stream",
      "title": "AWSBedrockLlama2Stream",
      "description": "Learn to use AWSBedrockLlama2Stream helper function in your application.",
      "content": "\n# `AWSBedrockLlama2Stream`\n\n<Note type=\"warning\">\n  AWSBedrockLlama2Stream has been removed in AI SDK 4.0.\n</Note>\n\n<Note type=\"warning\">\n  AWSBedrockLlama2Stream is part of the legacy AWS Bedrock integration. It is\n  not compatible with the AI SDK 3.1 functions.\n</Note>\n\nThe AWS Bedrock stream functions are utilties that transform the outputs from the AWS Bedrock API into a ReadableStream. It uses AIStream under the hood and handle parsing Bedrock's response.\n\n## Import\n\n### React\n\n<Snippet te...",
      "path": "docs/07-reference/04-stream-helpers/12-aws-bedrock-llama-2-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-13-cohere-stream",
      "title": "CohereStream",
      "description": "Learn to use CohereStream helper function in your application.",
      "content": "\n# `CohereStream`\n\n<Note type=\"warning\">CohereStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  CohereStream is part of the legacy Cohere integration. It is not compatible\n  with the AI SDK 3.1 functions.\n</Note>\n\nThe CohereStream function is a utility that transforms the output from Cohere's API into a ReadableStream. It uses AIStream under the hood, applying a specific parser for the Cohere's response data structure. This works with the official Cohere API, and it's suppor...",
      "path": "docs/07-reference/04-stream-helpers/13-cohere-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-14-google-generative-ai-stream",
      "title": "GoogleGenerativeAIStream",
      "description": "Learn to use GoogleGenerativeAIStream helper function in your application.",
      "content": "\n# `GoogleGenerativeAIStream`\n\n<Note type=\"warning\">\n  GoogleGenerativeAIStream has been removed in AI SDK 4.0.\n</Note>\n\n<Note type=\"warning\">\n  GoogleGenerativeAIStream is part of the legacy Google Generative AI\n  integration. It is not compatible with the AI SDK 3.1 functions. It is\n  recommended to use the [AI SDK Google Generative AI\n  Provider](/providers/ai-sdk-providers/google-generative-ai) instead.\n</Note>\n\nThe GoogleGenerativeAIStream function is a utility that transforms the output fr...",
      "path": "docs/07-reference/04-stream-helpers/14-google-generative-ai-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-15-hugging-face-stream",
      "title": "HuggingFaceStream",
      "description": "Learn to use HuggingFaceStream helper function in your application.",
      "content": "\n# `HuggingFaceStream`\n\n<Note type=\"warning\">HuggingFaceStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  HuggingFaceStream is part of the legacy Hugging Face integration. It is not\n  compatible with the AI SDK 3.1 functions.\n</Note>\n\nConverts the output from language models hosted on Hugging Face into a ReadableStream.\n\nWhile HuggingFaceStream is compatible with most Hugging Face language models, the rapidly evolving landscape of models may result in certain new or niche mo...",
      "path": "docs/07-reference/04-stream-helpers/15-hugging-face-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-16-langchain-adapter",
      "title": "@ai-sdk/langchain Adapter",
      "description": "API Reference for the LangChain Adapter.",
      "content": "\n# `@ai-sdk/langchain`\n\nThe `@ai-sdk/langchain` module provides helper functions to transform LangChain output streams into data streams and data stream responses.\nSee the [LangChain Adapter documentation](/providers/adapters/langchain) for more information.\n\nIt supports:\n\n- LangChain StringOutputParser streams\n- LangChain AIMessageChunk streams\n- LangChain StreamEvents v2 streams\n\n## Import\n\n<Snippet\n  text={`import { toDataStreamResponse } from \"@ai-sdk/langchain\"`}\n  prompt={false}\n/>\n\n## API...",
      "path": "docs/07-reference/04-stream-helpers/16-langchain-adapter.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-16-llamaindex-adapter",
      "title": "@ai-sdk/llamaindex Adapter",
      "description": "API Reference for the LlamaIndex Adapter.",
      "content": "\n# `@ai-sdk/llamaindex`\n\nThe `@ai-sdk/llamaindex` package provides helper functions to transform LlamaIndex output streams into data streams and data stream responses.\nSee the [LlamaIndex Adapter documentation](/providers/adapters/llamaindex) for more information.\n\nIt supports:\n\n- LlamaIndex ChatEngine streams\n- LlamaIndex QueryEngine streams\n\n## Import\n\n<Snippet\n  text={`import { toDataResponse } from \"@ai-sdk/llamaindex\"`}\n  prompt={false}\n/>\n\n## API Signature\n\n### Methods\n\n<PropertiesTable\n  ...",
      "path": "docs/07-reference/04-stream-helpers/16-llamaindex-adapter.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-17-mistral-stream",
      "title": "MistralStream",
      "description": "Learn to use MistralStream helper function in your application.",
      "content": "\n# `MistralStream`\n\n<Note type=\"warning\">MistralStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  MistralStream is part of the legacy Mistral integration. It is not compatible\n  with the AI SDK 3.1 functions. It is recommended to use the [AI SDK Mistral\n  Provider](/providers/ai-sdk-providers/mistral) instead.\n</Note>\n\nTransforms the output from Mistral's language models into a ReadableStream.\n\nThis works with the official Mistral API, and it's supported in both Node.js, the...",
      "path": "docs/07-reference/04-stream-helpers/17-mistral-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-18-replicate-stream",
      "title": "ReplicateStream",
      "description": "Learn to use ReplicateStream helper function in your application.",
      "content": "\n# `ReplicateStream`\n\n<Note type=\"warning\">ReplicateStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  ReplicateStream is part of the legacy Replicate integration. It is not\n  compatible with the AI SDK 3.1 functions.\n</Note>\n\nThe ReplicateStream function is a utility that handles extracting the stream from the output of [Replicate](https://replicate.com)'s API. It expects a Prediction object as returned by the [Replicate JavaScript SDK](https://github.com/replicate/replicate...",
      "path": "docs/07-reference/04-stream-helpers/18-replicate-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-19-inkeep-stream",
      "title": "InkeepStream",
      "description": "Learn to use InkeepStream helper function in your application.",
      "content": "\n# `InkeepStream`\n\n<Note type=\"warning\">InkeepStream has been removed in AI SDK 4.0.</Note>\n\n<Note type=\"warning\">\n  InkeepStream is part of the legacy Inkeep integration. It is not compatible\n  with the AI SDK 3.1 functions.\n</Note>\n\nThe InkeepStream function is a utility that transforms the output from [Inkeep](https://inkeep.com)'s API into a ReadableStream. It uses AIStream under the hood, applying a specific parser for the Inkeep's response data structure.\n\nThis works with the official Inke...",
      "path": "docs/07-reference/04-stream-helpers/19-inkeep-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-04-stream-helpers-index",
      "title": "Stream Helpers",
      "description": "Learn to use help functions that help stream generations from different providers.",
      "content": "\n<IndexCards\n  cards={[\n    {\n      title: 'AIStream',\n      description: 'Create a readable stream for AI responses.',\n      href: '/docs/reference/stream-helpers/ai-stream',\n    },\n    {\n      title: 'StreamingTextResponse',\n      description: 'Create a streaming response for text generations.',\n      href: '/docs/reference/stream-helpers/streaming-text-response',\n    },\n    {\n      title: 'streamtoResponse',\n      description: 'Pipe a ReadableStream to a Node.js ServerResponse object.',\n     ...",
      "path": "docs/07-reference/04-stream-helpers/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-api-call-error",
      "title": "AI_APICallError",
      "description": "Learn how to fix AI_APICallError",
      "content": "\n# AI_APICallError\n\nThis error occurs when an API call fails.\n\n## Properties\n\n- `url`: The URL of the API request that failed\n- `requestBodyValues`: The request body values sent to the API\n- `statusCode`: The HTTP status code returned by the API\n- `responseHeaders`: The response headers returned by the API\n- `responseBody`: The response body returned by the API\n- `isRetryable`: Whether the request can be retried based on the status code\n- `data`: Any additional data associated with the error\n\n##...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-api-call-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-download-error",
      "title": "AI_DownloadError",
      "description": "Learn how to fix AI_DownloadError",
      "content": "\n# AI_DownloadError\n\nThis error occurs when a download fails.\n\n## Properties\n\n- `url`: The URL that failed to download\n- `statusCode`: The HTTP status code returned by the server\n- `statusText`: The HTTP status text returned by the server\n- `message`: The error message containing details about the download failure\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_DownloadError` using:\n\n```typescript\nimport { DownloadError } from 'ai';\n\nif (DownloadError.isInstance(erro...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-download-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-empty-response-body-error",
      "title": "AI_EmptyResponseBodyError",
      "description": "Learn how to fix AI_EmptyResponseBodyError",
      "content": "\n# AI_EmptyResponseBodyError\n\nThis error occurs when the server returns an empty response body.\n\n## Properties\n\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_EmptyResponseBodyError` using:\n\n```typescript\nimport { EmptyResponseBodyError } from 'ai';\n\nif (EmptyResponseBodyError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-empty-response-body-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-argument-error",
      "title": "AI_InvalidArgumentError",
      "description": "Learn how to fix AI_InvalidArgumentError",
      "content": "\n# AI_InvalidArgumentError\n\nThis error occurs when an invalid argument was provided.\n\n## Properties\n\n- `parameter`: The name of the parameter that is invalid\n- `value`: The invalid value\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidArgumentError` using:\n\n```typescript\nimport { InvalidArgumentError } from 'ai';\n\nif (InvalidArgumentError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-argument-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-data-content-error",
      "title": "AI_InvalidDataContentError",
      "description": "How to fix AI_InvalidDataContentError",
      "content": "\n# AI_InvalidDataContentError\n\nThis error occurs when the data content provided in a multi-modal message part is invalid. Check out the [ prompt examples for multi-modal messages ](/docs/foundations/prompts#message-prompts).\n\n## Properties\n\n- `content`: The invalid content value\n- `message`: The error message describing the expected and received content types\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidDataContentError` using:\n\n```typescript\nimport { Inval...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-data-content-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-data-content",
      "title": "AI_InvalidDataContent",
      "description": "Learn how to fix AI_InvalidDataContent",
      "content": "\n# AI_InvalidDataContent\n\nThis error occurs when invalid data content is provided.\n\n## Properties\n\n- `content`: The invalid content value\n- `message`: The error message\n- `cause`: The cause of the error\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidDataContent` using:\n\n```typescript\nimport { InvalidDataContent } from 'ai';\n\nif (InvalidDataContent.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-data-content.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-message-role-error",
      "title": "AI_InvalidMessageRoleError",
      "description": "Learn how to fix AI_InvalidMessageRoleError",
      "content": "\n# AI_InvalidMessageRoleError\n\nThis error occurs when an invalid message role is provided.\n\n## Properties\n\n- `role`: The invalid role value\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidMessageRoleError` using:\n\n```typescript\nimport { InvalidMessageRoleError } from 'ai';\n\nif (InvalidMessageRoleError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-message-role-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-prompt-error",
      "title": "AI_InvalidPromptError",
      "description": "Learn how to fix AI_InvalidPromptError",
      "content": "\n# AI_InvalidPromptError\n\nThis error occurs when the prompt provided is invalid.\n\n## Properties\n\n- `prompt`: The invalid prompt value\n- `message`: The error message\n- `cause`: The cause of the error\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidPromptError` using:\n\n```typescript\nimport { InvalidPromptError } from 'ai';\n\nif (InvalidPromptError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-prompt-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-response-data-error",
      "title": "AI_InvalidResponseDataError",
      "description": "Learn how to fix AI_InvalidResponseDataError",
      "content": "\n# AI_InvalidResponseDataError\n\nThis error occurs when the server returns a response with invalid data content.\n\n## Properties\n\n- `data`: The invalid response data value\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidResponseDataError` using:\n\n```typescript\nimport { InvalidResponseDataError } from 'ai';\n\nif (InvalidResponseDataError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-response-data-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-invalid-tool-arguments-error",
      "title": "AI_InvalidToolArgumentsError",
      "description": "Learn how to fix AI_InvalidToolArgumentsError",
      "content": "\n# AI_InvalidToolArgumentsError\n\nThis error occurs when invalid tool argument was provided.\n\n## Properties\n\n- `toolName`: The name of the tool with invalid arguments\n- `toolArgs`: The invalid tool arguments\n- `message`: The error message\n- `cause`: The cause of the error\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_InvalidToolArgumentsError` using:\n\n```typescript\nimport { InvalidToolArgumentsError } from 'ai';\n\nif (InvalidToolArgumentsError.isInstance(error)) {\n  ...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-invalid-tool-arguments-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-json-parse-error",
      "title": "AI_JSONParseError",
      "description": "Learn how to fix AI_JSONParseError",
      "content": "\n# AI_JSONParseError\n\nThis error occurs when JSON fails to parse.\n\n## Properties\n\n- `text`: The text value that could not be parsed\n- `message`: The error message including parse error details\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_JSONParseError` using:\n\n```typescript\nimport { JSONParseError } from 'ai';\n\nif (JSONParseError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-json-parse-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-load-api-key-error",
      "title": "AI_LoadAPIKeyError",
      "description": "Learn how to fix AI_LoadAPIKeyError",
      "content": "\n# AI_LoadAPIKeyError\n\nThis error occurs when API key is not loaded successfully.\n\n## Properties\n\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_LoadAPIKeyError` using:\n\n```typescript\nimport { LoadAPIKeyError } from 'ai';\n\nif (LoadAPIKeyError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-load-api-key-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-load-setting-error",
      "title": "AI_LoadSettingError",
      "description": "Learn how to fix AI_LoadSettingError",
      "content": "\n# AI_LoadSettingError\n\nThis error occurs when a setting is not loaded successfully.\n\n## Properties\n\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_LoadSettingError` using:\n\n```typescript\nimport { LoadSettingError } from 'ai';\n\nif (LoadSettingError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-load-setting-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-message-conversion-error",
      "title": "AI_MessageConversionError",
      "description": "Learn how to fix AI_MessageConversionError",
      "content": "\n# AI_MessageConversionError\n\nThis error occurs when message conversion fails.\n\n## Properties\n\n- `originalMessage`: The original message that failed conversion\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_MessageConversionError` using:\n\n```typescript\nimport { MessageConversionError } from 'ai';\n\nif (MessageConversionError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-message-conversion-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-audio-generated-error",
      "title": "AI_NoAudioGeneratedError",
      "description": "Learn how to fix AI_NoAudioGeneratedError",
      "content": "\n# AI_NoAudioGeneratedError\n\nThis error occurs when no audio could be generated from the input.\n\n## Properties\n\n- `responses`: Array of responses\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoAudioGeneratedError` using:\n\n```typescript\nimport { NoAudioGeneratedError } from 'ai';\n\nif (NoAudioGeneratedError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-audio-generated-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-content-generated-error",
      "title": "AI_NoContentGeneratedError",
      "description": "Learn how to fix AI_NoContentGeneratedError",
      "content": "\n# AI_NoContentGeneratedError\n\nThis error occurs when the AI provider fails to generate content.\n\n## Properties\n\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoContentGeneratedError` using:\n\n```typescript\nimport { NoContentGeneratedError } from 'ai';\n\nif (NoContentGeneratedError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-content-generated-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-image-generated-error",
      "title": "AI_NoImageGeneratedError",
      "description": "Learn how to fix AI_NoImageGeneratedError",
      "content": "\n# AI_NoImageGeneratedError\n\nThis error occurs when the AI provider fails to generate an image.\nIt can arise due to the following reasons:\n\n- The model failed to generate a response.\n- The model generated an invalid response.\n\n## Properties\n\n- `message`: The error message.\n- `responses`: Metadata about the image model responses, including timestamp, model, and headers.\n- `cause`: The cause of the error. You can use this for more detailed error handling.\n\n## Checking for this Error\n\nYou can check...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-image-generated-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-object-generated-error",
      "title": "AI_NoObjectGeneratedError",
      "description": "Learn how to fix AI_NoObjectGeneratedError",
      "content": "\n# AI_NoObjectGeneratedError\n\nThis error occurs when the AI provider fails to generate a parsable object that conforms to the schema.\nIt can arise due to the following reasons:\n\n- The model failed to generate a response.\n- The model generated a response that could not be parsed.\n- The model generated a response that could not be validated against the schema.\n\n## Properties\n\n- `message`: The error message.\n- `text`: The text that was generated by the model. This can be the raw text or the tool ca...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-object-generated-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-output-specified-error",
      "title": "AI_NoOutputSpecifiedError",
      "description": "Learn how to fix AI_NoOutputSpecifiedError",
      "content": "\n# AI_NoOutputSpecifiedError\n\nThis error occurs when no output format was specified for the AI response, and output-related methods are called.\n\n## Properties\n\n- `message`: The error message (defaults to 'No output specified.')\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoOutputSpecifiedError` using:\n\n```typescript\nimport { NoOutputSpecifiedError } from 'ai';\n\nif (NoOutputSpecifiedError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-output-specified-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-such-model-error",
      "title": "AI_NoSuchModelError",
      "description": "Learn how to fix AI_NoSuchModelError",
      "content": "\n# AI_NoSuchModelError\n\nThis error occurs when a model ID is not found.\n\n## Properties\n\n- `modelId`: The ID of the model that was not found\n- `modelType`: The type of model\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoSuchModelError` using:\n\n```typescript\nimport { NoSuchModelError } from 'ai';\n\nif (NoSuchModelError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-such-model-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-such-provider-error",
      "title": "AI_NoSuchProviderError",
      "description": "Learn how to fix AI_NoSuchProviderError",
      "content": "\n# AI_NoSuchProviderError\n\nThis error occurs when a provider ID is not found.\n\n## Properties\n\n- `providerId`: The ID of the provider that was not found\n- `availableProviders`: Array of available provider IDs\n- `modelId`: The ID of the model\n- `modelType`: The type of model\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoSuchProviderError` using:\n\n```typescript\nimport { NoSuchProviderError } from 'ai';\n\nif (NoSuchProviderError.isInstan...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-such-provider-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-such-tool-error",
      "title": "AI_NoSuchToolError",
      "description": "Learn how to fix AI_NoSuchToolError",
      "content": "\n# AI_NoSuchToolError\n\nThis error occurs when a model tries to call an unavailable tool.\n\n## Properties\n\n- `toolName`: The name of the tool that was not found\n- `availableTools`: Array of available tool names\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoSuchToolError` using:\n\n```typescript\nimport { NoSuchToolError } from 'ai';\n\nif (NoSuchToolError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-such-tool-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-no-transcript-generated-error",
      "title": "AI_NoTranscriptGeneratedError",
      "description": "Learn how to fix AI_NoTranscriptGeneratedError",
      "content": "\n# AI_NoTranscriptGeneratedError\n\nThis error occurs when no transcript could be generated from the input.\n\n## Properties\n\n- `responses`: Array of responses\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_NoTranscriptGeneratedError` using:\n\n```typescript\nimport { NoTranscriptGeneratedError } from 'ai';\n\nif (NoTranscriptGeneratedError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-no-transcript-generated-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-retry-error",
      "title": "AI_RetryError",
      "description": "Learn how to fix AI_RetryError",
      "content": "\n# AI_RetryError\n\nThis error occurs when a retry operation fails.\n\n## Properties\n\n- `reason`: The reason for the retry failure\n- `lastError`: The most recent error that occurred during retries\n- `errors`: Array of all errors that occurred during retry attempts\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_RetryError` using:\n\n```typescript\nimport { RetryError } from 'ai';\n\nif (RetryError.isInstance(error)) {\n  // Handle the error\n}\n```...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-retry-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-too-many-embedding-values-for-call-error",
      "title": "AI_TooManyEmbeddingValuesForCallError",
      "description": "Learn how to fix AI_TooManyEmbeddingValuesForCallError",
      "content": "\n# AI_TooManyEmbeddingValuesForCallError\n\nThis error occurs when too many values are provided in a single embedding call.\n\n## Properties\n\n- `provider`: The AI provider name\n- `modelId`: The ID of the embedding model\n- `maxEmbeddingsPerCall`: The maximum number of embeddings allowed per call\n- `values`: The array of values that was provided\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_TooManyEmbeddingValuesForCallError` using:\n\n```typescript\nimport { TooManyEmbeddi...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-too-many-embedding-values-for-call-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-tool-call-repair-error",
      "title": "ToolCallRepairError",
      "description": "Learn how to fix AI SDK ToolCallRepairError",
      "content": "\n# ToolCallRepairError\n\nThis error occurs when there is a failure while attempting to repair an invalid tool call.\nThis typically happens when the AI attempts to fix either\na `NoSuchToolError` or `InvalidToolArgumentsError`.\n\n## Properties\n\n- `originalError`: The original error that triggered the repair attempt (either `NoSuchToolError` or `InvalidToolArgumentsError`)\n- `message`: The error message\n- `cause`: The underlying error that caused the repair to fail\n\n## Checking for this Error\n\nYou ca...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-tool-call-repair-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-type-validation-error",
      "title": "AI_TypeValidationError",
      "description": "Learn how to fix AI_TypeValidationError",
      "content": "\n# AI_TypeValidationError\n\nThis error occurs when type validation fails.\n\n## Properties\n\n- `value`: The value that failed validation\n- `message`: The error message including validation details\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_TypeValidationError` using:\n\n```typescript\nimport { TypeValidationError } from 'ai';\n\nif (TypeValidationError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-type-validation-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-ai-unsupported-functionality-error",
      "title": "AI_UnsupportedFunctionalityError",
      "description": "Learn how to fix AI_UnsupportedFunctionalityError",
      "content": "\n# AI_UnsupportedFunctionalityError\n\nThis error occurs when functionality is not unsupported.\n\n## Properties\n\n- `functionality`: The name of the unsupported functionality\n- `message`: The error message\n\n## Checking for this Error\n\nYou can check if an error is an instance of `AI_UnsupportedFunctionalityError` using:\n\n```typescript\nimport { UnsupportedFunctionalityError } from 'ai';\n\nif (UnsupportedFunctionalityError.isInstance(error)) {\n  // Handle the error\n}\n```\n...",
      "path": "docs/07-reference/05-ai-sdk-errors/ai-unsupported-functionality-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-05-ai-sdk-errors-index",
      "title": "AI SDK Errors",
      "description": "Troubleshooting information for common AI SDK errors.",
      "content": "\n# AI SDK Errors\n\n- [AI_APICallError](/docs/reference/ai-sdk-errors/ai-api-call-error)\n- [AI_DownloadError](/docs/reference/ai-sdk-errors/ai-download-error)\n- [AI_EmptyResponseBodyError](/docs/reference/ai-sdk-errors/ai-empty-response-body-error)\n- [AI_InvalidArgumentError](/docs/reference/ai-sdk-errors/ai-invalid-argument-error)\n- [AI_InvalidDataContent](/docs/reference/ai-sdk-errors/ai-invalid-data-content)\n- [AI_InvalidDataContentError](/docs/reference/ai-sdk-errors/ai-invalid-data-content-er...",
      "path": "docs/07-reference/05-ai-sdk-errors/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-07-reference-index",
      "title": "Reference",
      "description": "Reference documentation for the AI SDK",
      "content": "\n# API Reference\n\n<IndexCards\n  cards={[\n    {\n      title: 'AI SDK Core',\n      description: 'Switch between model providers without changing your code.',\n      href: '/docs/reference/ai-sdk-core',\n    },\n    {\n      title: 'AI SDK RSC',\n      description:\n        'Use React Server Components to stream user interfaces to the client.',\n      href: '/docs/reference/ai-sdk-rsc',\n    },\n    {\n      title: 'AI SDK UI',\n      description:\n        'Use hooks to integrate user interfaces that interact ...",
      "path": "docs/07-reference/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-00-versioning",
      "title": "Versioning",
      "description": "Understand how the AI SDK approaches versioning.",
      "content": "\n# Versioning\n\nEach version number follows the format: `MAJOR.MINOR.PATCH`\n\n- **Major**: Breaking API updates that require code changes.\n- **Minor**: Blog post that aggregates new features and improvements into a public release that highlights benefits.\n- **Patch**: New features and bug fixes.\n\n## API Stability\n\nWe communicate the stability of our APIs as follows:\n\n### Stable APIs\n\nAll APIs without special prefixes are considered stable and ready for production use. We maintain backward compatib...",
      "path": "docs/08-migration-guides/00-versioning.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-26-migration-guide-5-0",
      "title": "Migrate AI SDK 4.0 to 5.0",
      "description": "Learn how to upgrade AI SDK 4.0 to 5.0.",
      "content": "\n# Migrate AI SDK 4.0 to 5.0\n\n## Recommended Migration Process\n\n1. Backup your project. If you use a versioning control system, make sure all previous versions are committed.\n1. Upgrade to AI SDK 5.0.\n1. Automatically migrate your code using [codemods](#codemods).\n   > If you don't want to use codemods, we recommend resolving all deprecation warnings before upgrading to AI SDK 5.0.\n1. Follow the breaking changes guide below.\n1. Verify your project is working as expected.\n1. Commit your changes.\n...",
      "path": "docs/08-migration-guides/26-migration-guide-5-0.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-27-migration-guide-4-2",
      "title": "Migrate AI SDK 4.1 to 4.2",
      "description": "Learn how to upgrade AI SDK 4.1 to 4.2.",
      "content": "\n# Migrate AI SDK 4.1 to 4.2\n\n<Note>\n  Check out the [AI SDK 4.2 release blog\n  post](https://vercel.com/blog/ai-sdk-4-2) for more information about the\n  release.\n</Note>\n\nThis guide will help you upgrade to AI SDK 4.2:\n\n## Stable APIs\n\nThe following APIs have been moved to stable and no longer have the `experimental_` prefix:\n\n- `customProvider`\n- `providerOptions` (renamed from `providerMetadata` for provider-specific inputs)\n- `providerMetadata` (for provider-specific outputs)\n- `toolCallStr...",
      "path": "docs/08-migration-guides/27-migration-guide-4-2.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-28-migration-guide-4-1",
      "title": "Migrate AI SDK 4.0 to 4.1",
      "description": "Learn how to upgrade AI SDK 4.0 to 4.1.",
      "content": "\n# Migrate AI SDK 4.0 to 4.1\n\n<Note>\n  Check out the [AI SDK 4.1 release blog\n  post](https://vercel.com/blog/ai-sdk-4-1) for more information about the\n  release.\n</Note>\n\nNo breaking changes in this release.\n...",
      "path": "docs/08-migration-guides/28-migration-guide-4-1.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-29-migration-guide-4-0",
      "title": "Migrate AI SDK 3.4 to 4.0",
      "description": "Learn how to upgrade AI SDK 3.4 to 4.0.",
      "content": "\n# Migrate AI SDK 3.4 to 4.0\n\n<Note>\n  Check out the [AI SDK 4.0 release blog\n  post](https://vercel.com/blog/ai-sdk-4-0) for more information about the\n  release.\n</Note>\n\n## Recommended Migration Process\n\n1. Backup your project. If you use a versioning control system, make sure all previous versions are committed.\n1. [Migrate to AI SDK 3.4](/docs/troubleshooting/migration-guide/migration-guide-3-4).\n1. Upgrade to AI SDK 4.0.\n1. Automatically migrate your code using [codemods](#codemods).\n   > ...",
      "path": "docs/08-migration-guides/29-migration-guide-4-0.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-36-migration-guide-3-4",
      "title": "Migrate AI SDK 3.3 to 3.4",
      "description": "Learn how to upgrade AI SDK 3.3 to 3.4.",
      "content": "\n# Migrate AI SDK 3.3 to 3.4\n\n<Note>\n  Check out the [AI SDK 3.4 release blog\n  post](https://vercel.com/blog/ai-sdk-3-4) for more information about the\n  release.\n</Note>\n\nNo breaking changes in this release.\n...",
      "path": "docs/08-migration-guides/36-migration-guide-3-4.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-37-migration-guide-3-3",
      "title": "Migrate AI SDK 3.2 to 3.3",
      "description": "Learn how to upgrade AI SDK 3.2 to 3.3.",
      "content": "\n# Migrate AI SDK 3.2 to 3.3\n\n<Note>\n  Check out the [AI SDK 3.3 release blog\n  post](https://vercel.com/blog/vercel-ai-sdk-3-3) for more information about\n  the release.\n</Note>\n\nNo breaking changes in this release.\n\nThe following changelog encompasses all changes made in the 3.2.x series,\nintroducing significant improvements and new features across the AI SDK and its associated libraries:\n\n## New Features\n\n### Open Telemetry Support\n\n- Added experimental [OpenTelemetry support](/docs/ai-sdk-co...",
      "path": "docs/08-migration-guides/37-migration-guide-3-3.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-38-migration-guide-3-2",
      "title": "Migrate AI SDK 3.1 to 3.2",
      "description": "Learn how to upgrade AI SDK 3.1 to 3.2.",
      "content": "\n# Migrate AI SDK 3.1 to 3.2\n\n<Note>\n  Check out the [AI SDK 3.2 release blog\n  post](https://vercel.com/blog/introducing-vercel-ai-sdk-3-2) for more\n  information about the release.\n</Note>\n\nThis guide will help you upgrade to AI SDK 3.2:\n\n- Experimental `StreamingReactResponse` functionality has been removed\n- Several features have been deprecated\n- UI framework integrations have moved to their own Node modules\n\n## Upgrading\n\n### AI SDK\n\nTo update to AI SDK version 3.2, run the following comma...",
      "path": "docs/08-migration-guides/38-migration-guide-3-2.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-39-migration-guide-3-1",
      "title": "Migrate AI SDK 3.0 to 3.1",
      "description": "Learn how to upgrade AI SDK 3.0 to 3.1.",
      "content": "\n# Migrate AI SDK 3.0 to 3.1\n\n<Note>\n  Check out the [AI SDK 3.1 release blog\n  post](https://vercel.com/blog/vercel-ai-sdk-3-1-modelfusion-joins-the-team)\n  for more information about the release.\n</Note>\n\nThis guide will help you:\n\n- Upgrade to AI SDK 3.1\n- Migrate from Legacy Providers to AI SDK Core\n- Migrate from [`render`](/docs/reference/ai-sdk-rsc/render) to [`streamUI`](/docs/reference/ai-sdk-rsc/stream-ui)\n\nUpgrading to AI SDK 3.1 does not require using the newly released AI SDK Core A...",
      "path": "docs/08-migration-guides/39-migration-guide-3-1.mdx",
      "category": "docs"
    },
    {
      "id": "docs-08-migration-guides-index",
      "title": "Migration Guides",
      "description": "Learn how to upgrade between Vercel AI versions.",
      "content": "\n# Migration Guides\n\n- [ Migrate AI SDK 4.x to 5.0 ](/docs/migration-guides/migration-guide-5-0)\n- [ Migrate AI SDK 4.1 to 4.2 ](/docs/migration-guides/migration-guide-4-2)\n- [ Migrate AI SDK 4.0 to 4.1 ](/docs/migration-guides/migration-guide-4-1)\n- [ Migrate AI SDK 3.4 to 4.0 ](/docs/migration-guides/migration-guide-4-0)\n- [ Migrate AI SDK 3.3 to 3.4 ](/docs/migration-guides/migration-guide-3-4)\n- [ Migrate AI SDK 3.2 to 3.3 ](/docs/migration-guides/migration-guide-3-3)\n- [ Migrate AI SDK 3.1 ...",
      "path": "docs/08-migration-guides/index.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-01-azure-stream-slow",
      "title": "Azure OpenAI Slow to Stream",
      "description": "Learn to troubleshoot Azure OpenAI slow to stream issues.",
      "content": "\n# Azure OpenAI Slow To Stream\n\n## Issue\n\nWhen using OpenAI hosted on Azure, streaming is slow and in big chunks.\n\n## Cause\n\nThis is a Microsoft Azure issue. Some users have reported the following solutions:\n\n- **Update Content Filtering Settings**:\n  Inside [Azure AI Studio](https://ai.azure.com/), within \"Shared resources\" > \"Content filters\", create a new\n  content filter and set the \"Streaming mode (Preview)\" under \"Output filter\" from \"Default\"\n  to \"Asynchronous Filter\".\n\n## Solution\n\nYou ...",
      "path": "docs/09-troubleshooting/01-azure-stream-slow.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-02-client-side-function-calls-not-invoked",
      "title": "Client-Side Function Calls Not Invoked",
      "description": "Troubleshooting client-side function calls not being invoked.",
      "content": "\n# Client-Side Function Calls Not Invoked\n\n## Issue\n\nI upgraded the AI SDK to v3.0.20 or newer. I am using [`OpenAIStream`](/docs/reference/stream-helpers/openai-stream). Client-side function calls are no longer invoked.\n\n## Solution\n\nYou will need to add a stub for `experimental_onFunctionCall` to [`OpenAIStream`](/docs/reference/stream-helpers/openai-stream) to enable the correct forwarding of the function calls to the client.\n\n```tsx\nconst stream = OpenAIStream(response, {\n  async experimenta...",
      "path": "docs/09-troubleshooting/02-client-side-function-calls-not-invoked.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-03-server-actions-in-client-components",
      "title": "Server Actions in Client Components",
      "description": "Troubleshooting errors related to server actions in client components.",
      "content": "\n# Server Actions in Client Components\n\nYou may use Server Actions in client components, but sometimes you may encounter the following issues.\n\n## Issue\n\nIt is not allowed to define inline `\"use server\"` annotated Server Actions in Client Components.\n\n## Solution\n\nTo use Server Actions in a Client Component, you can either:\n\n- Export them from a separate file with `\"use server\"` at the top.\n- Pass them down through props from a Server Component.\n- Implement a combination of [`createAI`](/docs/re...",
      "path": "docs/09-troubleshooting/03-server-actions-in-client-components.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-04-strange-stream-output",
      "title": "useChat/useCompletion stream output contains 0:... instead of text",
      "description": "How to fix strange stream output in the UI",
      "content": "\n# useChat/useCompletion stream output contains 0:... instead of text\n\n## Issue\n\nI am using custom client code to process a server response that is sent using [`StreamingTextResponse`](/docs/reference/stream-helpers/streaming-text-response). I am using version `3.0.20` or newer of the AI SDK. When I send a query, the UI streams text such as `0: \"Je\"`, `0: \" suis\"`, `0: \"des\"...` instead of the text that I’m looking for.\n\n## Background\n\nThe AI SDK has switched to the stream data protocol in versi...",
      "path": "docs/09-troubleshooting/04-strange-stream-output.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-05-streamable-ui-errors",
      "title": "Streamable UI Errors",
      "description": "Troubleshooting errors related to streamable UI.",
      "content": "\n# Streamable UI Component Error\n\n## Issue\n\n- Variable Not Found\n- Cannot find `div`\n- `Component` refers to a value, but is being used as a type\n\n## Solution\n\nIf you encounter these errors when working with streamable UIs within server actions, it is likely because the file ends in `.ts` instead of `.tsx`.\n...",
      "path": "docs/09-troubleshooting/05-streamable-ui-errors.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-05-tool-invocation-missing-result",
      "title": "Tool Invocation Missing Result Error",
      "description": "How to fix the \"ToolInvocation must have a result\" error when using tools without execute functions",
      "content": "\n# Tool Invocation Missing Result Error\n\n## Issue\n\nWhen using `generateText()` or `streamText()`, you may encounter the error \"ToolInvocation must have a result\" when a tool without an `execute` function is called.\n\n## Cause\n\nThe error occurs when you define a tool without an `execute` function and don't provide the result through other means (like `useChat`'s `onToolCall` or `addToolResult` functions).\n\nEach time a tool is invoked, the model expects to receive a result before continuing the con...",
      "path": "docs/09-troubleshooting/05-tool-invocation-missing-result.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-06-streaming-not-working-when-deployed",
      "title": "Streaming Not Working When Deployed",
      "description": "Troubleshooting streaming issues in deployed apps.",
      "content": "\n# Streaming Not Working When Deployed\n\n## Issue\n\nStreaming with the AI SDK works in my local development environment.\nHowever, when deploying, streaming does not work in the deployed app.\nInstead of streaming, only the full response is returned after a while.\n\n## Cause\n\nThe causes of this issue are varied and depend on the deployment environment.\n\n## Solution\n\nYou can try the following:\n\n- add `'Transfer-Encoding': 'chunked'` and/or `Connection: 'keep-alive'` headers\n\n  ```tsx\n  return result.t...",
      "path": "docs/09-troubleshooting/06-streaming-not-working-when-deployed.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-06-streaming-not-working-when-proxied",
      "title": "Streaming Not Working When Proxied",
      "description": "Troubleshooting streaming issues in proxied apps.",
      "content": "\n# Streaming Not Working When Proxied\n\n## Issue\n\nStreaming with the AI SDK doesn't work in local development environment, or deployed in some proxy environments.\nInstead of streaming, only the full response is returned after a while.\n\n## Cause\n\nThe causes of this issue are caused by the proxy middleware.\n\nIf the middleware is configured to compress the response, it will cause the streaming to fail.\n\n## Solution\n\nYou can try the following, the solution only affects the streaming API:\n\n- add `'Con...",
      "path": "docs/09-troubleshooting/06-streaming-not-working-when-proxied.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-06-timeout-on-vercel",
      "title": "Getting Timeouts When Deploying on Vercel",
      "description": "Learn how to fix timeouts and cut off responses when deploying to Vercel.",
      "content": "\n# Getting Timeouts When Deploying on Vercel\n\n## Issue\n\nStreaming with the AI SDK works in my local development environment.\nHowever, when I'm deploying to Vercel, longer responses get chopped off in the UI and I'm seeing timeouts in the Vercel logs or I'm seeing the error: `Uncaught (in promise) Error: Connection closed`.\n\n## Solution\n\nIf you are using Next.js with the App Router, you can add the following to your route file or the page you are calling your Server Action from:\n\n```tsx\nexport co...",
      "path": "docs/09-troubleshooting/06-timeout-on-vercel.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-07-unclosed-streams",
      "title": "Unclosed Streams",
      "description": "Troubleshooting errors related to unclosed streams.",
      "content": "\n# Unclosed Streams\n\nSometimes streams are not closed properly, which can lead to unexpected behavior. The following are some common issues that can occur when streams are not closed properly.\n\n## Issue\n\nThe streamable UI has been slow to update.\n\n## Solution\n\nThis happens when you create a streamable UI using [`createStreamableUI`](/docs/reference/ai-sdk-rsc/create-streamable-ui) and fail to close the stream.\nIn order to fix this, you must ensure you close the stream by calling the [`.done()`](...",
      "path": "docs/09-troubleshooting/07-unclosed-streams.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-08-use-chat-failed-to-parse-stream",
      "title": "useChat Failed to Parse Stream",
      "description": "Troubleshooting errors related to the Use Chat Failed to Parse Stream error.",
      "content": "\n# `useChat` \"Failed to Parse Stream String\" Error\n\n## Issue\n\nI am using [`useChat`](/docs/reference/ai-sdk-ui/use-chat) or [`useCompletion`](/docs/reference/ai-sdk-ui/use-completion), and I am getting a `\"Failed to parse stream string. Invalid code\"` error. I am using version `3.0.20` or newer of the AI SDK.\n\n## Background\n\nThe AI SDK has switched to the stream data protocol in version `3.0.20`.\n[`useChat`](/docs/reference/ai-sdk-ui/use-chat) and [`useCompletion`](/docs/reference/ai-sdk-ui/use-...",
      "path": "docs/09-troubleshooting/08-use-chat-failed-to-parse-stream.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-09-client-stream-error",
      "title": "Server Action Plain Objects Error",
      "description": "Troubleshooting errors related to using AI SDK Core functions with Server Actions.",
      "content": "\n# \"Only plain objects can be passed from client components\" Server Action Error\n\n## Issue\n\nI am using [`streamText`](/docs/reference/ai-sdk-core/stream-text) or [`streamObject`](/docs/reference/ai-sdk-core/stream-object) with Server Actions, and I am getting a `\"only plain objects and a few built ins can be passed from client components\"` error.\n\n## Background\n\nThis error occurs when you're trying to return a non-serializable object from a Server Action to a Client Component. The streamText fun...",
      "path": "docs/09-troubleshooting/09-client-stream-error.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-10-use-chat-tools-no-response",
      "title": "useChat No Response",
      "description": "Troubleshooting errors related to the Use Chat Failed to Parse Stream error.",
      "content": "\n# `useChat` No Response\n\n## Issue\n\nI am using [`useChat`](/docs/reference/ai-sdk-ui/use-chat).\nWhen I log the incoming messages on the server, I can see the tool call and the tool result, but the model does not respond with anything.\n\n## Solution\n\nTo resolve this issue, convert the incoming messages to the `ModelMessage` format using the [`convertToModelMessages`](/docs/reference/ai-sdk-ui/convert-to-model-messages) function.\n\n```tsx highlight=\"9\"\nimport { openai } from '@ai-sdk/openai';\nimport...",
      "path": "docs/09-troubleshooting/10-use-chat-tools-no-response.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-11-use-chat-custom-request-options",
      "title": "Custom headers, body, and credentials not working with useChat",
      "description": "Troubleshooting errors related to custom request configuration in useChat hook",
      "content": "\n# Custom headers, body, and credentials not working with useChat\n\n## Issue\n\nWhen using the `useChat` hook, custom request options like headers, body fields, and credentials configured directly on the hook are not being sent with the request:\n\n```tsx\n// These options are not sent with the request\nconst { messages, sendMessage } = useChat({\n  headers: {\n    Authorization: 'Bearer token123',\n  },\n  body: {\n    user_id: '123',\n  },\n  credentials: 'include',\n});\n```\n\n## Background\n\nThe `useChat` hoo...",
      "path": "docs/09-troubleshooting/11-use-chat-custom-request-options.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-12-use-chat-an-error-occurred",
      "title": "useChat \"An error occurred",
      "description": "Troubleshooting errors related to the \"An error occurred\" error in useChat.",
      "content": "\n# `useChat` \"An error occurred\"\n\n## Issue\n\nI am using [`useChat`](/docs/reference/ai-sdk-ui/use-chat) and I get the error \"An error occurred\".\n\n## Background\n\nError messages from `streamText` are masked by default when using `toDataStreamResponse` for security reasons (secure-by-default).\nThis prevents leaking sensitive information to the client.\n\n## Solution\n\nTo forward error details to the client or to log errors, use the `getErrorMessage` function when calling `toDataStreamResponse`.\n\n```tsx...",
      "path": "docs/09-troubleshooting/12-use-chat-an-error-occurred.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-13-repeated-assistant-messages",
      "title": "Repeated assistant messages in useChat",
      "description": "Troubleshooting duplicate assistant messages when using useChat with streamText",
      "content": "\n# Repeated assistant messages in useChat\n\n## Issue\n\nWhen using `useChat` with `streamText` on the server, the assistant's messages appear duplicated in the UI - showing both the previous message and the new message, or showing the same message multiple times. This can occur when using tool calls or complex message flows.\n\n```tsx\n// Server-side code that may experience assistant message duplication on the client\nexport async function POST(req: Request) {\n  const { messages } = await req.json();\n...",
      "path": "docs/09-troubleshooting/13-repeated-assistant-messages.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-14-stream-abort-handling",
      "title": "onFinish not called when stream is aborted",
      "description": "Troubleshooting onFinish callback not executing when streams are aborted with toUIMessageStreamResponse",
      "content": "\n# onFinish not called when stream is aborted\n\n## Issue\n\nWhen using `toUIMessageStreamResponse` with an `onFinish` callback, the callback may not execute when the stream is aborted. This happens because the abort handler immediately terminates the response, preventing the `onFinish` callback from being triggered.\n\n```tsx\n// Server-side code where onFinish isn't called on abort\nexport async function POST(req: Request) {\n  const { messages } = await req.json();\n\n  const result = streamText({\n    m...",
      "path": "docs/09-troubleshooting/14-stream-abort-handling.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-15-stream-text-not-working",
      "title": "streamText fails silently",
      "description": "Troubleshooting errors related to the streamText function not working.",
      "content": "\n# `streamText` is not working\n\n## Issue\n\nI am using [`streamText`](/docs/reference/ai-sdk-core/stream-text) function, and it does not work.\nIt does not throw any errors and the stream is only containing error parts.\n\n## Background\n\n`streamText` immediately starts streaming to enable sending data without waiting for the model.\nErrors become part of the stream and are not thrown to prevent e.g. servers from crashing.\n\n## Solution\n\nTo log errors, you can provide an `onError` callback that is trigg...",
      "path": "docs/09-troubleshooting/15-stream-text-not-working.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-16-streaming-status-delay",
      "title": "Streaming Status Shows But No Text Appears",
      "description": "Why useChat shows \"streaming\" status without any visible content",
      "content": "\n# Streaming Status Shows But No Text Appears\n\n## Issue\n\nWhen using `useChat`, the status changes to \"streaming\" immediately, but no text appears for several seconds.\n\n## Background\n\nThe status changes to \"streaming\" as soon as the connection to the server is established and streaming begins - this includes metadata streaming, not just the LLM's generated tokens.\n\n## Solution\n\nCreate a custom loading state that checks if the last assistant message actually contains content:\n\n```tsx\n'use client';...",
      "path": "docs/09-troubleshooting/16-streaming-status-delay.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-30-model-is-not-assignable-to-type",
      "title": "Model is not assignable to type \"LanguageModelV1",
      "description": "Troubleshooting errors related to incompatible models.",
      "content": "\n# Model is not assignable to type \"LanguageModelV1\"\n\n## Issue\n\nI have updated the AI SDK and now I get the following error: `Type 'SomeModel' is not assignable to type 'LanguageModelV1'.`\n\n<Note>Similar errors can occur with `EmbeddingModelV2` as well.</Note>\n\n## Background\n\nSometimes new features are being added to the model specification.\nThis can cause incompatibilities with older provider versions.\n\n## Solution\n\nUpdate your provider packages and the AI SDK to the latest version.\n...",
      "path": "docs/09-troubleshooting/30-model-is-not-assignable-to-type.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-40-typescript-cannot-find-namespace-jsx",
      "title": "TypeScript error \"Cannot find namespace 'JSX'",
      "description": "Troubleshooting errors related to TypeScript and JSX.",
      "content": "\n# TypeScript error \"Cannot find namespace 'JSX'\"\n\n## Issue\n\nI am using the AI SDK in a project without React, e.g. an Hono server, and I get the following error:\n`error TS2503: Cannot find namespace 'JSX'.`\n\n## Background\n\nThe AI SDK has a dependency on `@types/react` which defines the `JSX` namespace.\nIt will be removed in the next major version of the AI SDK.\n\n## Solution\n\nYou can install the `@types/react` package as a dependency to fix the error.\n\n```bash\nnpm install @types/react\n```\n...",
      "path": "docs/09-troubleshooting/40-typescript-cannot-find-namespace-jsx.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-50-react-maximum-update-depth-exceeded",
      "title": "React error \"Maximum update depth exceeded",
      "description": "Troubleshooting errors related to the \"Maximum update depth exceeded\" error.",
      "content": "\n# React error \"Maximum update depth exceeded\"\n\n## Issue\n\nI am using the AI SDK in a React project with the `useChat` or `useCompletion` hooks\nand I get the following error when AI responses stream in: `Maximum update depth exceeded`.\n\n## Background\n\nBy default, the UI is re-rendered on every chunk that arrives.\nThis can overload the rendering, especially on slower devices or when complex components\nneed updating (e.g. Markdown). Throttling can mitigate this.\n\n## Solution\n\nUse the `experimental_...",
      "path": "docs/09-troubleshooting/50-react-maximum-update-depth-exceeded.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-60-jest-cannot-find-module-ai-rsc",
      "title": "Jest: cannot find module '@ai-sdk/rsc'",
      "description": "Troubleshooting AI SDK errors related to the Jest: cannot find module '@ai-sdk/rsc' error",
      "content": "\n# Jest: cannot find module '@ai-sdk/rsc'\n\n## Issue\n\nI am using AI SDK RSC and am writing tests for my RSC components with Jest.\n\nI am getting the following error: `Cannot find module '@ai-sdk/rsc'`.\n\n## Solution\n\nConfigure the module resolution via `jest config update` in `moduleNameMapper`:\n\n```json filename=\"jest.config.js\"\n\"moduleNameMapper\": {\n  \"^@ai-sdk/rsc$\": \"<rootDir>/node_modules/@ai-sdk/rsc/dist\"\n}\n```\n...",
      "path": "docs/09-troubleshooting/60-jest-cannot-find-module-ai-rsc.mdx",
      "category": "docs"
    },
    {
      "id": "docs-09-troubleshooting-index",
      "title": "Troubleshooting",
      "description": "Troubleshooting information for common issues encountered with the AI SDK.",
      "content": "\n# Troubleshooting\n\nThis section is designed to help you quickly identify and resolve common issues encountered with the AI SDK, ensuring a smoother and more efficient development experience.\n\n<Support />\n...",
      "path": "docs/09-troubleshooting/index.mdx",
      "category": "docs"
    }
  ],
  "cookbook": [
    {
      "id": "cookbook-00-guides-01-rag-chatbot",
      "title": "RAG Agent",
      "description": "Learn how to build a RAG Agent with the AI SDK and Next.js",
      "content": "\n# RAG Agent Guide\n\nIn this guide, you will learn how to build a retrieval-augmented generation (RAG) agent.\n\n<video\n  src=\"/images/rag-guide-demo.mp4\"\n  autoplay\n  height={540}\n  width={910}\n  controls\n  playsinline\n/>\n\nBefore we dive in, let's look at what RAG is, and why we would want to use it.\n\n### What is RAG?\n\nRAG stands for retrieval augmented generation. In simple terms, RAG is the process of providing a Large Language Model (LLM) with specific information relevant to the prompt.\n\n### W...",
      "path": "cookbook/00-guides/01-rag-chatbot.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-02-multi-modal-chatbot",
      "title": "Multi-Modal Agent",
      "description": "Learn how to build a multi-modal agent that can process images and PDFs with the AI SDK.",
      "tags": [
        "multi-modal",
        "agent",
        "images",
        "pdf",
        "vision",
        "next"
      ],
      "content": "\n# Multi-Modal Agent\n\nIn this guide, you will build a multi-modal agent capable of understanding both images and PDFs.\n\nMulti-modal refers to the ability of the agent to understand and generate responses in multiple formats. In this guide, we'll focus on images and PDFs - two common document types that modern language models can process natively.\n\n<Note>\n  For a complete list of providers and their multi-modal capabilities, visit the\n  [providers documentation](/providers/ai-sdk-providers).\n</No...",
      "path": "cookbook/00-guides/02-multi-modal-chatbot.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-03-slackbot",
      "title": "Slackbot Agent Guide",
      "description": "Learn how to use the AI SDK to build an AI Agent in Slack.",
      "tags": [
        "agents",
        "chatbot"
      ],
      "content": "\n# Building an AI Agent in Slack with the AI SDK\n\nIn this guide, you will learn how to build a Slackbot powered by the AI SDK. The bot will be able to respond to direct messages and mentions in channels using the full context of the thread.\n\n## Slack App Setup\n\nBefore we start building, you'll need to create and configure a Slack app:\n\n1. Go to [api.slack.com/apps](https://api.slack.com/apps)\n2. Click \"Create New App\" and choose \"From scratch\"\n3. Give your app a name and select your workspace\n4....",
      "path": "cookbook/00-guides/03-slackbot.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-04-natural-language-postgres",
      "title": "Natural Language Postgres",
      "description": "Learn how to build a Next.js app that lets you talk to a PostgreSQL database in natural language.",
      "tags": [
        "agents",
        "next",
        "tools"
      ],
      "content": "\n# Natural Language Postgres Guide\n\nIn this guide, you will learn how to build an app that uses AI to interact with a PostgreSQL database using natural language.\n\nThe application will:\n\n- Generate SQL queries from a natural language input\n- Explain query components in plain English\n- Create a chart to visualise query results\n\nYou can find a completed version of this project at [natural-language-postgres.vercel.app](https://natural-language-postgres.vercel.app).\n\n## Project setup\n\nThis project us...",
      "path": "cookbook/00-guides/04-natural-language-postgres.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-05-computer-use",
      "title": "Get started with Computer Use",
      "description": "Get started with Claude's Computer Use capabilities with the AI SDK",
      "tags": [
        "computer-use",
        "tools"
      ],
      "content": "\n# Get started with Computer Use\n\nWith the [release of Computer Use in Claude 3.5 Sonnet](https://www.anthropic.com/news/3-5-models-and-computer-use), you can now direct AI models to interact with computers like humans do - moving cursors, clicking buttons, and typing text. This capability enables automation of complex tasks while leveraging Claude's advanced reasoning abilities.\n\nThe AI SDK is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like Anth...",
      "path": "cookbook/00-guides/05-computer-use.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-17-gemini-2-5",
      "title": "Get started with Gemini 2.5",
      "description": "Get started with Gemini 2.5 using the AI SDK.",
      "tags": [
        "getting-started"
      ],
      "content": "\n# Get started with Gemini 2.5\n\nWith the release of [Gemini 2.5](https://developers.googleblog.com/gemini-2-5-thinking-model-updates/), there has never been a better time to start building AI applications, particularly those that require complex reasoning capabilities and advanced intelligence.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like Gemini 2.5 alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and...",
      "path": "cookbook/00-guides/17-gemini-2-5.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-18-claude-4",
      "title": "Get started with Claude 4",
      "description": "Get started with Claude 4 using the AI SDK.",
      "tags": [
        "getting-started"
      ],
      "content": "\n# Get started with Claude 4\n\nWith the release of Claude 4, there has never been a better time to start building AI applications, particularly those that require complex reasoning capabilities and advanced intelligence.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like Claude 4 alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and more.\n\n## Claude 4\n\nClaude 4 is Anthropic's most advanced model family to dat...",
      "path": "cookbook/00-guides/18-claude-4.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-19-openai-responses",
      "title": "OpenAI Responses API",
      "description": "Get started with the OpenAI Responses API using the AI SDK.",
      "tags": [
        "getting-started",
        "agents"
      ],
      "content": "\n# Get started with OpenAI Responses API\n\nWith the [release of OpenAI's responses API](https://openai.com/index/new-tools-for-building-agents/), there has never been a better time to start building AI applications, particularly those that require a deeper understanding of the world.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and more.\n\n## OpenAI Responses ...",
      "path": "cookbook/00-guides/19-openai-responses.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-20-sonnet-3-7",
      "title": "Get started with Claude 3.7 Sonnet",
      "description": "Get started with Claude 3.7 Sonnet using the AI SDK.",
      "tags": [
        "getting-started"
      ],
      "content": "\n# Get started with Claude 3.7 Sonnet\n\nWith the [release of Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet), there has never been a better time to start building AI applications, particularly those that require complex reasoning capabilities.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like Claude 3.7 Sonnet alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and more.\n\n## Claude 3.7 Son...",
      "path": "cookbook/00-guides/20-sonnet-3-7.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-21-llama-3_1",
      "title": "Get started with Llama 3.1",
      "description": "Get started with Llama 3.1 using the AI SDK.",
      "tags": [
        "getting-started"
      ],
      "content": "\n# Get started with Llama 3.1\n\n<Note>\n  The current generation of Llama models is 3.3. Please note that while this\n  guide focuses on Llama 3.1, the newer Llama 3.3 models are now available and\n  may offer improved capabilities. The concepts and integration techniques\n  described here remain applicable, though you may want to use the latest\n  generation models for optimal performance.\n</Note>\n\nWith the [release of Llama 3.1](https://ai.meta.com/blog/meta-llama-3-1/), there has never been a bette...",
      "path": "cookbook/00-guides/21-llama-3_1.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-23-o1",
      "title": "Get started with OpenAI o1",
      "description": "Get started with OpenAI o1 using the AI SDK.",
      "tags": [
        "getting-started",
        "reasoning"
      ],
      "content": "\n# Get started with OpenAI o1\n\nWith the [release of OpenAI's o1 series models](https://openai.com/index/learning-to-reason-with-llms/), there has never been a better time to start building AI applications, particularly those that require complex reasoning capabilities.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like OpenAI o1 alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and more.\n\n## OpenAI o1\n\nOpenA...",
      "path": "cookbook/00-guides/23-o1.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-24-o3",
      "title": "Get started with OpenAI o3-mini",
      "description": "Get started with OpenAI o3-mini using the AI SDK.",
      "tags": [
        "getting-started",
        "reasoning"
      ],
      "content": "\n# Get started with OpenAI o3-mini\n\nWith the [release of OpenAI's o3-mini model](https://openai.com/index/openai-o3-mini/), there has never been a better time to start building AI applications, particularly those that require complex STEM reasoning capabilities.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like OpenAI o3-mini alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and more.\n\n## OpenAI o3-mini\n\nOp...",
      "path": "cookbook/00-guides/24-o3.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-25-r1",
      "title": "Get started with DeepSeek R1",
      "description": "Get started with DeepSeek R1 using the AI SDK.",
      "tags": [
        "getting-started",
        "reasoning"
      ],
      "content": "\n# Get started with DeepSeek R1\n\nWith the [release of DeepSeek R1](https://api-docs.deepseek.com/news/news250528), there has never been a better time to start building AI applications, particularly those that require complex reasoning capabilities.\n\nThe [AI SDK](/) is a powerful TypeScript toolkit for building AI applications with large language models (LLMs) like DeepSeek R1 alongside popular frameworks like React, Next.js, Vue, Svelte, Node.js, and more.\n\n## DeepSeek R1\n\nDeepSeek R1 is a serie...",
      "path": "cookbook/00-guides/25-r1.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-00-guides-index",
      "title": "Guides",
      "description": "Learn how to build AI applications with the AI SDK",
      "content": "\n# Guides\n\nThese use-case specific guides are intended to help you build real applications with the AI SDK.\n\n<IndexCards\n  cards={[\n    {\n      title: 'RAG Chatbot',\n      description:\n        'Learn how to build a retrieval-augmented generation chatbot with the AI SDK.',\n      href: '/cookbook/guides/rag-chatbot',\n    },\n    {\n      title: 'Multimodal Chatbot',\n      description: 'Learn how to build a multimodal chatbot with the AI SDK.',\n      href: '/cookbook/guides/multi-modal-chatbot',\n    ...",
      "path": "cookbook/00-guides/index.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-10-generate-text",
      "title": "Generate Text",
      "description": "Learn how to generate text using the AI SDK and Next.js.",
      "tags": [
        "next"
      ],
      "content": "\n# Generate Text\n\nA situation may arise when you need to generate text based on a prompt. For example, you may want to generate a response to a question or summarize a body of text. The `generateText` function can be used to generate text based on the input prompt.\n\n<Browser>\n  <TextGeneration />\n</Browser>\n\n## Client\n\nLet's create a simple React component that will make a POST request to the `/api/completion` endpoint when a button is clicked. The endpoint will generate text based on the input ...",
      "path": "cookbook/01-next/10-generate-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-11-generate-text-with-chat-prompt",
      "title": "Generate Text with Chat Prompt",
      "description": "Learn how to generate text with chat prompt using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming",
        "chat"
      ],
      "content": "\n# Generate Text with Chat Prompt\n\nPreviously, you were able to generate text and objects using either a single message prompt, a system prompt, or a combination of both of them. However, there may be times when you want to generate text based on a series of messages.\n\nA chat completion allows you to generate text based on a series of messages. This series of messages can be any series of interactions between any number of systems, but the most popular and relatable use case has been a series of...",
      "path": "cookbook/01-next/11-generate-text-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-12-generate-image-with-chat-prompt",
      "title": "Generate Image with Chat Prompt",
      "description": "Learn how to generate an image with a chat prompt using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming",
        "chat",
        "image generation",
        "tools"
      ],
      "content": "\n# Generate Image with Chat Prompt\n\nWhen building a chatbot, you may want to allow the user to generate an image. This can be done by creating a tool that generates an image using the [`experimental_generateImage`](/docs/reference/ai-sdk-core/generate-image#generateimage) function from the AI SDK.\n\n## Server\n\nLet's create an endpoint at `/api/chat` that generates the assistant's response based on the conversation history. You will also define a tool called `generateImage` that will generate an i...",
      "path": "cookbook/01-next/12-generate-image-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-122-caching-middleware",
      "title": "Caching Middleware",
      "description": "Learn how to create a caching middleware with Next.js and KV.",
      "tags": [
        "next",
        "streaming",
        "caching",
        "middleware"
      ],
      "content": "\n# Caching Middleware\n\n<Note type=\"warning\">This example is not yet updated to v5.</Note>\n\nLet's create a simple chat interface that uses [`LanguageModelMiddleware`](/docs/ai-sdk-core/middleware) to cache the assistant's responses in fast KV storage.\n\n## Client\n\nLet's create a simple chat interface that allows users to send messages to the assistant and receive responses. You will integrate the `useChat` hook from `@ai-sdk/react` to stream responses.\n\n```tsx filename='app/page.tsx'\n'use client';...",
      "path": "cookbook/01-next/122-caching-middleware.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-20-stream-text",
      "title": "Stream Text",
      "description": "Learn how to stream text using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming"
      ],
      "content": "\n# Stream Text\n\nText generation can sometimes take a long time to complete, especially when you're generating a couple of paragraphs. In such cases, it is useful to stream the text generation process to the client in real-time. This allows the client to display the generated text as it is being generated, rather than have users wait for it to complete before displaying the result.\n\n<Browser>\n  <TextGeneration stream />\n</Browser>\n\n## Client\n\nLet's create a simple React component that imports the...",
      "path": "cookbook/01-next/20-stream-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-21-stream-text-with-chat-prompt",
      "title": "Stream Text with Chat Prompt",
      "description": "Learn how to generate text using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming",
        "chat"
      ],
      "content": "\n# Stream Text with Chat Prompt\n\nChat completion can sometimes take a long time to finish, especially when the response is big. In such cases, it is useful to stream the chat completion to the client in real-time. This allows the client to display the new message as it is being generated by the model, rather than have users wait for it to finish.\n\n<Browser>\n  <ChatGeneration\n    stream\n    history={[\n      { role: 'User', content: 'How is it going?' },\n      { role: 'Assistant', content: 'All go...",
      "path": "cookbook/01-next/21-stream-text-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-22-stream-text-with-image-prompt",
      "title": "Stream Text with Image Prompt",
      "description": "Learn how to stream text with an image prompt using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming",
        "multimodal"
      ],
      "content": "\n# Stream Text with Image Prompt\n\nVision models such as GPT-4o can process both text and images. In this example, we will show you how to send an image URL along with the user's message to the model with `useChat`.\n\n## Using Image URLs\n\n### Server\n\nThe server route uses `convertToModelMessages` to handle the conversion from `UIMessage`s to model messages, which automatically handles multimodal content including images.\n\n```tsx filename='app/api/chat/route.ts' highlight=\"8,9,23\"\nimport { openai }...",
      "path": "cookbook/01-next/22-stream-text-with-image-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-23-chat-with-pdf",
      "title": "Chat with PDFs",
      "description": "Learn how to build a chatbot that can understand PDFs using the AI SDK and Next.js",
      "tags": [
        "next",
        "pdf",
        "multimodal"
      ],
      "content": "\n# Chat with PDFs\n\nSome language models like Anthropic's Claude Sonnet 3.5 and Google's Gemini 2.0 can understand PDFs and respond to questions about their contents. In this example, we'll show you how to build a chat interface that accepts PDF uploads.\n\n<Note>\n  This example requires a provider that supports PDFs, such as Anthropic's\n  Claude 3.7, Google's Gemini 2.5, or OpenAI's GPT-4.1. Check the [provider\n  documentation](/providers/ai-sdk-providers) for up-to-date support\n  information.\n</N...",
      "path": "cookbook/01-next/23-chat-with-pdf.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-24-stream-text-multistep",
      "title": "streamText Multi-Step Cookbook",
      "description": "Learn how to create several streamText steps with different settings",
      "tags": [
        "next",
        "streaming"
      ],
      "content": "\n# streamText Multi-Step Agent\n\nYou may want to have different steps in your stream where each step has different settings,\ne.g. models, tools, or system prompts.\n\nWith `createUIMessageStream` and `sendFinish` / `sendStart` options when merging\ninto the `UIMessageStream`, you can control when the finish and start events are sent to the client,\nallowing you to have different steps in a single assistant UI message.\n\n## Server\n\n```typescript filename='app/api/chat/route.ts'\nimport { openai } from '...",
      "path": "cookbook/01-next/24-stream-text-multistep.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-25-markdown-chatbot-with-memoization",
      "title": "Markdown Chatbot with Memoization",
      "description": "Build a chatbot that renders and memoizes Markdown responses with Next.js and the AI SDK.",
      "tags": [
        "next",
        "streaming",
        "chatbot",
        "markdown"
      ],
      "content": "\n# Markdown Chatbot with Memoization\n\nWhen building a chatbot with Next.js and the AI SDK, you'll likely want to render the model's responses in Markdown format using a library like `react-markdown`. However, this can have negative performance implications as the Markdown is re-rendered on each new token received from the streaming response.\n\nAs conversations get longer and more complex, this performance impact becomes exponentially worse since the entire conversation history is re-rendered with...",
      "path": "cookbook/01-next/25-markdown-chatbot-with-memoization.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-30-generate-object",
      "title": "Generate Object",
      "description": "Learn how to generate object using the AI SDK and Next.js",
      "tags": [
        "next",
        "structured data"
      ],
      "content": "\n# Generate Object\n\nEarlier functions like `generateText` and `streamText` gave us the ability to generate unstructured text. However, if you want to generate structured data like JSON, you can provide a schema that describes the structure of your desired object to the `generateObject` function.\n\nThe function requires you to provide a schema using [zod](https://zod.dev), a library for defining schemas for JavaScript objects. By using zod, you can also use it to validate the generated object and ...",
      "path": "cookbook/01-next/30-generate-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-31-generate-object-with-file-prompt",
      "title": "Generate Object with File Prompt through Form Submission",
      "description": "Learn how to generate object with file prompt through form submission using the AI SDK and Next.js",
      "tags": [
        "next",
        "multi-modal"
      ],
      "content": "\n# Generate Object with File Prompt through Form Submission\n\n<Note>\n  This feature is limited to models/providers that support PDF inputs\n  ([Anthropic](/providers/ai-sdk-providers/anthropic#pdf-support),\n  [OpenAI](/providers/ai-sdk-providers/openai#pdf-support), [Google\n  Gemini](/providers/ai-sdk-providers/google-generative-ai#file-inputs), and\n  [Google Vertex](/providers/ai-sdk-providers/google-vertex#file-inputs)).\n</Note>\n\nWith select models, you can send PDFs (files) as part of your prom...",
      "path": "cookbook/01-next/31-generate-object-with-file-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-40-stream-object",
      "title": "Stream Object",
      "description": "Learn how to stream object using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming",
        "structured data"
      ],
      "content": "\n# Stream Object\n\nObject generation can sometimes take a long time to complete, especially when you're generating a large schema.\nIn such cases, it is useful to stream the object generation process to the client in real-time.\nThis allows the client to display the generated object as it is being generated,\nrather than have users wait for it to complete before displaying the result.\n\n<Browser>\n  <ObjectGeneration\n    stream\n    object={{\n      notifications: [\n        {\n          name: 'Jamie Robe...",
      "path": "cookbook/01-next/40-stream-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-70-call-tools",
      "title": "Call Tools",
      "description": "Learn how to call tools using the AI SDK and Next.js",
      "tags": [
        "next",
        "tool use"
      ],
      "content": "\n# Call Tools\n\nSome models allow developers to provide a list of tools that can be called at any time during a generation. This is useful for extending the capabilities of a language model to either use logic or data to interact with systems external to the model.\n\n<Browser>\n  <ChatGeneration\n    history={[\n      { role: 'User', content: 'How is it going?' },\n      { role: 'Assistant', content: 'All good, how may I help you?' },\n    ]}\n    inputMessage={{\n      role: 'User',\n      content: 'What...",
      "path": "cookbook/01-next/70-call-tools.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-72-call-tools-multiple-steps",
      "title": "Call Tools in Multiple Steps",
      "description": "Learn how to call tools in multiple steps using the AI SDK and Next.js",
      "tags": [
        "next",
        "streaming",
        "tool use"
      ],
      "content": "\n# Call Tools in Multiple Steps\n\nSome language models are great at calling tools in multiple steps to achieve a more complex task. This is particularly useful when the tools are dependent on each other and need to be executed in sequence during the same generation step.\n\n## Client\n\nLet's create a React component that imports the `useChat` hook from the `@ai-sdk/react` module. The `useChat` hook will call the `/api/chat` endpoint when the user sends a message. The endpoint will generate the assis...",
      "path": "cookbook/01-next/72-call-tools-multiple-steps.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-73-mcp-tools",
      "title": "Model Context Protocol (MCP) Tools",
      "description": "Learn how to use MCP tools with the AI SDK and Next.js",
      "tags": [
        "next",
        "tool use",
        "agent",
        "mcp"
      ],
      "content": "\n# MCP Tools\n\nThe AI SDK supports Model Context Protocol (MCP) tools by offering a lightweight client that exposes a `tools` method for retrieving tools from a MCP server. After use, the client should always be closed to release resources.\n\n## Server\n\nLet's create a route handler for `/api/completion` that will generate text based on the input prompt and MCP tools that can be called at any time during a generation. The route will call the `streamText` function from the `ai` module, which will th...",
      "path": "cookbook/01-next/73-mcp-tools.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-75-human-in-the-loop",
      "title": "Human-in-the-Loop Agent with Next.js",
      "description": "Add a human approval step to your agentic system with Next.js and the AI SDK",
      "tags": [
        "next",
        "agents",
        "tool use"
      ],
      "content": "\n# Human-in-the-Loop with Next.js\n\nWhen building agentic systems, it's important to add human-in-the-loop (HITL) functionality to ensure that users can approve actions before the system executes them. This recipe will describe how to [build a low-level solution](#adding-a-confirmation-step) and then provide an [example abstraction](#building-your-own-abstraction) you could implement and customise based on your needs.\n\n## Background\n\nTo understand how to implement this functionality, let's look a...",
      "path": "cookbook/01-next/75-human-in-the-loop.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-80-send-custom-body-from-use-chat",
      "title": "Send Custom Body from useChat",
      "description": "Learn how to send a custom body from the useChat hook using the AI SDK and Next.js",
      "tags": [
        "next",
        "chat"
      ],
      "content": "\n# Send Custom Body from useChat\n\nBy default, `useChat` sends all messages as well as information from the request to the server.\nHowever, it is often desirable to control the body content that is sent to the server, e.g. to:\n\n- only send the last message\n- send additional data along with the message\n- change the structure of the request body\n\nThe `prepareSendMessagesRequest` option allows you to customize the body content that is sent to the server.\nThe function receives the message list, the r...",
      "path": "cookbook/01-next/80-send-custom-body-from-use-chat.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-90-render-visual-interface-in-chat",
      "title": "Render Visual Interface in Chat",
      "description": "Learn how to render visual interfaces in chat using the AI SDK and Next.js",
      "tags": [
        "next",
        "generative user interface"
      ],
      "content": "\n# Render Visual Interface in Chat\n\nAn interesting consequence of language models that can call [tools](/docs/ai-sdk-core/tools-and-tool-calling) is that this ability can be used to render visual interfaces by streaming React components to the client.\n\n<Browser>\n  <ChatGeneration\n    history={[\n      { role: 'User', content: 'How is it going?' },\n      { role: 'Assistant', content: 'All good, how may I help you?' },\n    ]}\n    inputMessage={{\n      role: 'User',\n      content: 'What is the weath...",
      "path": "cookbook/01-next/90-render-visual-interface-in-chat.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-01-next-index",
      "title": "Next.js",
      "content": "...",
      "path": "cookbook/01-next/index.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-10-generate-text",
      "title": "Generate Text",
      "description": "Learn how to generate text using the AI SDK and Node",
      "tags": [
        "node"
      ],
      "content": "\n# Generate Text\n\nThe most basic LLM use case is generating text based on a prompt.\nFor example, you may want to generate a response to a question or summarize a body of text.\nThe `generateText` function can be used to generate text based on the input prompt.\n\n```ts file='index.ts'\nimport { generateText } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nconst result = await generateText({\n  model: openai('gpt-4o'),\n  prompt: 'Why is the sky blue?',\n});\n\nconsole.log(result);\n```\n...",
      "path": "cookbook/05-node/10-generate-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-100-retrieval-augmented-generation",
      "title": "Retrieval Augmented Generation",
      "description": "Learn how to use retrieval augmented generation using the AI SDK and Node",
      "tags": [
        "node"
      ],
      "content": "\n# Retrieval Augmented Generation\n\nRetrieval Augmented Generation (RAG) is a technique that enhances the capabilities of language models by providing them with relevant information from external sources during the generation process.\nThis approach allows the model to access and incorporate up-to-date or specific knowledge that may not be present in its original training data.\n\nThis example uses [the following essay](https://raw.githubusercontent.com/run-llama/llama_index/main/docs/docs/examples/...",
      "path": "cookbook/05-node/100-retrieval-augmented-generation.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-11-generate-text-with-chat-prompt",
      "title": "Generate Text with Chat Prompt",
      "description": "Learn how to generate text with chat prompt using the AI SDK and Node",
      "tags": [
        "node",
        "chat"
      ],
      "content": "\n# Generate Text with Chat Prompt\n\nPreviously, we were able to generate text and objects using either a single message prompt, a system prompt, or a combination of both of them. However, there may be times when you want to generate text based on a series of messages.\n\nA chat completion allows you to generate text based on a series of messages. This series of messages can be any series of interactions between any number of systems, but the most popular and relatable use case has been a series of ...",
      "path": "cookbook/05-node/11-generate-text-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-12-generate-text-with-image-prompt",
      "title": "Generate Text with Image Prompt",
      "description": "Learn how to generate text with image prompt using the AI SDK and Node",
      "tags": [
        "node",
        "multimodal"
      ],
      "content": "\n# Generate Text with Image Prompt\n\nSome language models that support vision capabilities accept images as part of the prompt. Here are some of the different [formats](/docs/reference/ai-sdk-core/generate-text#content-image) you can use to include images as input.\n\n## URL\n\n```ts file='index.ts'\nimport { generateText } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nconst result = await generateText({\n  model: openai('gpt-4.1'),\n  maxOutputTokens: 512,\n  messages: [\n    {\n      role: 'user',...",
      "path": "cookbook/05-node/12-generate-text-with-image-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-20-stream-text",
      "title": "Stream Text",
      "description": "Learn how to stream text using the AI SDK and Node",
      "tags": [
        "node",
        "streaming"
      ],
      "content": "\n# Stream Text\n\nText generation can sometimes take a long time to complete, especially when you're generating a couple of paragraphs.\nIn such cases, it is useful to stream the text to the client in real-time.\nThis allows the client to display the generated text as it is being generated,\nrather than have users wait for it to complete before displaying the result.\n\n```txt\nIntroducing \"Joyful Hearts Day\" - a holiday dedicated to spreading love, joy, and kindness to others.\n\nOn Joyful Hearts Day, pe...",
      "path": "cookbook/05-node/20-stream-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-21-stream-text-with-chat-prompt",
      "title": "Stream Text with Chat Prompt",
      "description": "Learn how to stream text with chat prompt using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "chat"
      ],
      "content": "\n# Stream Text with Chat Prompt\n\nText generation can sometimes take a long time to finish, especially when the response is big.\nIn such cases, it is useful to stream the chat completion to the client in real-time.\nThis allows the client to display the new message as it is being generated by the model,\nrather than have users wait for it to finish.\n\n```ts file='index.ts'\nimport { streamText } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nconst result = streamText({\n  model: openai('gpt-4o')...",
      "path": "cookbook/05-node/21-stream-text-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-22-stream-text-with-image-prompt",
      "title": "Stream Text with Image Prompt",
      "description": "Learn how to stream text with image prompt using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "multimodal"
      ],
      "content": "\n# Stream Text with Image Prompt\n\nVision-language models can analyze images alongside text prompts to generate responses about visual content. This multimodal approach allows for rich interactions where you can ask questions about images, request descriptions, or analyze visual details. The combination of image and text inputs enables more sophisticated AI applications like visual question answering and image analysis.\n\n```ts\nimport { anthropic } from '@ai-sdk/anthropic';\nimport { streamText } f...",
      "path": "cookbook/05-node/22-stream-text-with-image-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-23-stream-text-with-file-prompt",
      "title": "Stream Text with File Prompt",
      "description": "Learn how to stream text with file prompt using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "multimodal"
      ],
      "content": "\n# Stream Text with File Prompt\n\nWorking with files in AI applications often requires analyzing documents, processing structured data, or extracting information from various file formats. File prompts allow you to send file content directly to the model, enabling tasks like document analysis, data extraction, or generating responses based on file contents.\n\n```ts\nimport { anthropic } from '@ai-sdk/anthropic';\nimport { streamText } from 'ai';\nimport 'dotenv/config';\nimport fs from 'node:fs';\n\nasy...",
      "path": "cookbook/05-node/23-stream-text-with-file-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-30-generate-object-reasoning",
      "title": "Generate Object with a Reasoning Model",
      "description": "Learn how to generate structured data with a reasoning model using the AI SDK and Node",
      "tags": [
        "node",
        "structured data",
        "reasoning"
      ],
      "content": "\n# Generate Object with a Reasoning Model\n\nReasoning models, like [DeepSeek's](/providers/ai-sdk-providers/deepseek) R1, are gaining popularity due to their ability to understand and generate better responses to complex queries than non-reasoning models.\nYou may want to use these models to generate structured data. However, most (like R1 and [OpenAI's](/providers/ai-sdk-providers/openai) o1) do not support tool-calling or structured outputs.\n\nOne solution is to pass the output from a reasoning m...",
      "path": "cookbook/05-node/30-generate-object-reasoning.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-30-generate-object",
      "title": "Generate Object",
      "description": "Learn how to generate structured data using the AI SDK and Node",
      "tags": [
        "node",
        "structured data"
      ],
      "content": "\n# Generate Object\n\nEarlier functions like `generateText` and `streamText` gave us the ability to generate unstructured text. However, if you want to generate structured data like JSON, you can provide a schema that describes the structure of your desired object to the `generateObject` function.\n\nThe function requires you to provide a schema using [zod](https://zod.dev), a library for defining schemas for JavaScript objects. By using zod, you can also use it to validate the generated object and ...",
      "path": "cookbook/05-node/30-generate-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-40-stream-object",
      "title": "Stream Object",
      "description": "Learn how to stream structured data using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "structured data"
      ],
      "content": "\n# Stream Object\n\nObject generation can sometimes take a long time to complete,\nespecially when you're generating a large schema.\n\nIn Generative UI use cases, it is useful to stream the object to the client in real-time\nto render UIs as the object is being generated.\nYou can use the [`streamObject`](/docs/reference/ai-sdk-core/stream-object) function to generate partial object streams.\n\n```ts file='index.ts'\nimport { openai } from '@ai-sdk/openai';\nimport { streamObject } from 'ai';\nimport { z }...",
      "path": "cookbook/05-node/40-stream-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-41-stream-object-with-image-prompt",
      "title": "Stream Object with Image Prompt",
      "description": "Learn how to stream structured data with an image prompt using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "structured data",
        "multimodal"
      ],
      "content": "\n# Stream Object with Image Prompt\n\nSome language models that support vision capabilities accept images as part of the prompt. Here are some of the different [formats](/docs/reference/ai-sdk-core/generate-text#content-image) you can use to include images as input.\n\n## URL\n\n```ts file='index.ts'\nimport { streamObject } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport dotenv from 'dotenv';\nimport { z } from 'zod';\n\ndotenv.config();\n\nasync function main() {\n  const { partialObjectStream }...",
      "path": "cookbook/05-node/41-stream-object-with-image-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-45-stream-object-record-token-usage",
      "title": "Record Token Usage After Streaming Object",
      "description": "Learn how to record token usage when streaming structured data using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "structured data",
        "observability"
      ],
      "content": "\n# Record Token Usage After Streaming Object\n\nWhen you're streaming structured data with [`streamObject`](/docs/reference/ai-sdk-core/stream-object),\nyou may want to record the token usage for billing purposes.\n\n## `onFinish` Callback\n\nYou can use the `onFinish` callback to record token usage.\nIt is called when the stream is finished.\n\n```ts file='index.ts' highlight={\"15-17\"}\nimport { openai } from '@ai-sdk/openai';\nimport { streamObject } from 'ai';\nimport { z } from 'zod';\n\nconst result = str...",
      "path": "cookbook/05-node/45-stream-object-record-token-usage.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-46-stream-object-record-final-object",
      "title": "Record Final Object after Streaming Object",
      "description": "Learn how to record the final object after streaming an object using the AI SDK and Node",
      "tags": [
        "node",
        "streaming",
        "structured data"
      ],
      "content": "\n# Record Final Object after Streaming Object\n\nWhen you're streaming structured data, you may want to record the final object for logging or other purposes.\n\n## `onFinish` Callback\n\nYou can use the `onFinish` callback to record the final object.\nIt is called when the stream is finished.\n\nThe `object` parameter contains the final object, or `undefined` if the type validation fails.\nThere is also an `error` parameter that contains error when e.g. the object does not match the schema.\n\n```ts file='...",
      "path": "cookbook/05-node/46-stream-object-record-final-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-50-call-tools",
      "title": "Call Tools",
      "description": "Learn how to call tools using the AI SDK and Node",
      "tags": [
        "node",
        "tool use"
      ],
      "content": "\n# Call Tools\n\nSome models allow developers to provide a list of tools that can be called at any time during a generation.\nThis is useful for extending the capabilities of a language model to either use logic or data to interact with systems external to the model.\n\n```ts\nimport { generateText, tool } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport { z } from 'zod';\n\nconst result = await generateText({\n  model: openai('gpt-4.1'),\n  tools: {\n    weather: tool({\n      description: 'Get t...",
      "path": "cookbook/05-node/50-call-tools.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-52-call-tools-with-image-prompt",
      "title": "Call Tools with Image Prompt",
      "description": "Learn how to call tools with image prompt using the AI SDK and Node",
      "tags": [
        "node",
        "tool use",
        "multimodal"
      ],
      "content": "\n# Call Tools with Image Prompt\n\nSome language models that support vision capabilities accept images as part of the prompt. Here are some of the different [formats](/docs/reference/ai-sdk-core/generate-text#content-image) you can use to include images as input.\n\n```ts\nimport { generateText, tool } from 'ai';\nimport { openai } from '@ai-sdk/openai';\nimport { z } from 'zod';\n\nconst result = await generateText({\n  model: openai('gpt-4.1'),\n  messages: [\n    {\n      role: 'user',\n      content: [\n  ...",
      "path": "cookbook/05-node/52-call-tools-with-image-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-53-call-tools-multiple-steps",
      "title": "Call Tools in Multiple Steps",
      "description": "Learn how to call tools with multiple steps using the AI SDK and Node",
      "tags": [
        "node",
        "tool use",
        "agent"
      ],
      "content": "\n# Call Tools in Multiple Steps\n\nModels call tools to gather information or perform actions that are not directly available to the model.\nWhen tool results are available, the model can use them to generate another response.\n\nYou can enable multi-step tool calls in `generateText` by defining stopping conditions with `stopWhen`.\nThis allows you to define the conditions for which your agent should stop when the model generates a tool call.\n\n```ts highlight={\"7\"}\nimport { generateText, tool, stepCou...",
      "path": "cookbook/05-node/53-call-tools-multiple-steps.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-54-mcp-tools",
      "title": "Model Context Protocol (MCP) Tools",
      "description": "Learn how to use MCP tools with the AI SDK and Node",
      "tags": [
        "node",
        "tool use",
        "agent",
        "mcp"
      ],
      "content": "\n# MCP Tools\n\nThe AI SDK supports Model Context Protocol (MCP) tools by offering a lightweight client that exposes a `tools` method for retrieving tools from a MCP server. After use, the client should always be closed to release resources.\n\nUse the official Model Context Protocol Typescript SDK to create the connection to the MCP server.\n\n<Snippet text=\"pnpm install @modelcontextprotocol/sdk\" />\n\n```ts\nimport { experimental_createMCPClient, generateText, stepCountIs } from 'ai';\nimport { Experim...",
      "path": "cookbook/05-node/54-mcp-tools.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-55-manual-agent-loop",
      "title": "Manual Agent Loop",
      "description": "Learn how to create your own agentic loop with full control over tool execution",
      "tags": [
        "node",
        "agent"
      ],
      "content": "\n# Manual Agent Loop\n\nWhen you need complete control over the agentic loop and tool execution, you can manage the agent flow yourself rather than using `prepareStep` and `stopWhen`. This approach gives you full flexibility over when and how tools are executed, message history management, and loop termination conditions.\n\nThis pattern is useful when you want to:\n\n- Implement custom logic between tool calls\n- Handle tool execution errors in specific ways\n- Add custom logging or monitoring\n- Integr...",
      "path": "cookbook/05-node/55-manual-agent-loop.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-56-web-search-agent",
      "title": "Web Search Agent",
      "description": "Learn how to build an agent that has access to web with the AI SDK and Node",
      "tags": [
        "node",
        "tool use",
        "agent",
        "web"
      ],
      "content": "\n# Web Search Agent\n\nThere are two approaches you can take to building a web search agent with the AI SDK:\n\n1. Use a model that has native web-searching capabilities\n2. Create a tool to access the web and return search results.\n\nBoth approaches have their advantages and disadvantages. Models with native search capabilities tend to be faster and there is no additional cost to make the search. The disadvantage is that you have less control over what is being searched, and the functionality is limi...",
      "path": "cookbook/05-node/56-web-search-agent.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-60-embed-text",
      "title": "Embed Text",
      "description": "Learn how to embed text using the AI SDK and Node",
      "tags": [
        "node",
        "embedding"
      ],
      "content": "\n# Embed Text\n\nText embeddings are numerical representations of text that capture semantic meaning, allowing machines to understand and process language in a mathematical way. These vector representations are crucial for many AI applications, as they enable tasks like semantic search, document similarity comparison, and content recommendation.\n\nThis example demonstrates how to convert text into embeddings using a text embedding model. The resulting embedding is a high-dimensional vector that rep...",
      "path": "cookbook/05-node/60-embed-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-61-embed-text-batch",
      "title": "Embed Text in Batch",
      "description": "Learn how to embed multiple text using the AI SDK and Node",
      "tags": [
        "node",
        "embedding"
      ],
      "content": "\n# Embed Text in Batch\n\nWhen working with large datasets or multiple pieces of text, processing embeddings one at a time can be inefficient. Batch embedding allows you to convert multiple text inputs into embeddings simultaneously, significantly improving performance and reducing API calls. This is particularly useful when processing documents, chat messages, or any collection of text that needs to be vectorized.\n\nThis example shows how to embed multiple text inputs in a single operation using t...",
      "path": "cookbook/05-node/61-embed-text-batch.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-70-intercept-fetch-requests",
      "title": "Intercepting Fetch Requests",
      "description": "Learn how to intercept fetch requests using the AI SDK and Node",
      "tags": [
        "node"
      ],
      "content": "\n# Intercepting Fetch Requests\n\nMany providers support setting a custom `fetch` function using the `fetch` argument in their factory function.\n\nA custom `fetch` function can be used to intercept and modify requests before they are sent to the provider's API,\nand to intercept and modify responses before they are returned to the caller.\n\nUse cases for intercepting requests include:\n\n- Logging requests and responses\n- Adding authentication headers\n- Modifying request bodies\n- Caching responses\n- Us...",
      "path": "cookbook/05-node/70-intercept-fetch-requests.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-80-local-caching-middleware",
      "title": "Local Caching Middleware",
      "description": "Learn how to create a caching middleware for local development.",
      "tags": [
        "streaming",
        "caching",
        "middleware"
      ],
      "content": "\n# Local Caching Middleware\n\n<Note type=\"warning\">This example is not yet updated to v5.</Note>\n\nWhen developing AI applications, you'll often find yourself repeatedly making the same API calls during development. This can lead to increased costs and slower development cycles. A caching middleware allows you to store responses locally and reuse them when the same inputs are provided.\n\nThis approach is particularly useful in two scenarios:\n\n1. **Iterating on UI/UX** - When you're focused on styli...",
      "path": "cookbook/05-node/80-local-caching-middleware.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-05-node-index",
      "title": "Node",
      "content": "...",
      "path": "cookbook/05-node/index.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-15-api-servers-10-node-http-server",
      "title": "Node.js HTTP Server",
      "description": "Learn how to use the AI SDK in a Node.js HTTP server",
      "tags": [
        "api servers",
        "streaming"
      ],
      "content": "\n# Node.js HTTP Server\n\nYou can use the AI SDK in a Node.js HTTP server to generate text and stream it to the client.\n\n## Examples\n\nThe examples start a simple HTTP server that listens on port 8080. You can e.g. test it using `curl`:\n\n```bash\ncurl -X POST http://localhost:8080\n```\n\n<Note>\n  The examples use the OpenAI `gpt-4o` model. Ensure that the OpenAI API key is\n  set in the `OPENAI_API_KEY` environment variable.\n</Note>\n\n**Full example**: [github.com/vercel/ai/examples/node-http-server](ht...",
      "path": "cookbook/15-api-servers/10-node-http-server.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-15-api-servers-20-express",
      "title": "Express",
      "description": "Learn how to use the AI SDK in an Express server",
      "tags": [
        "api servers",
        "streaming"
      ],
      "content": "\n# Express\n\nYou can use the AI SDK in an [Express](https://expressjs.com/) server to generate and stream text and objects to the client.\n\n## Examples\n\nThe examples start a simple HTTP server that listens on port 8080. You can e.g. test it using `curl`:\n\n```bash\ncurl -X POST http://localhost:8080\n```\n\n<Note>\n  The examples use the OpenAI `gpt-4o` model. Ensure that the OpenAI API key is\n  set in the `OPENAI_API_KEY` environment variable.\n</Note>\n\n**Full example**: [github.com/vercel/ai/examples/e...",
      "path": "cookbook/15-api-servers/20-express.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-15-api-servers-30-hono",
      "title": "Hono",
      "description": "Example of using the AI SDK in a Hono server.",
      "tags": [
        "api servers",
        "streaming"
      ],
      "content": "\n# Hono\n\nYou can use the AI SDK in a [Hono](https://hono.dev/) server to generate and stream text and objects to the client.\n\n## Examples\n\nThe examples start a simple HTTP server that listens on port 8080. You can e.g. test it using `curl`:\n\n```bash\ncurl -X POST http://localhost:8080\n```\n\n<Note>\n  The examples use the OpenAI `gpt-4o` model. Ensure that the OpenAI API key is\n  set in the `OPENAI_API_KEY` environment variable.\n</Note>\n\n**Full example**: [github.com/vercel/ai/examples/hono](https:/...",
      "path": "cookbook/15-api-servers/30-hono.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-15-api-servers-40-fastify",
      "title": "Fastify",
      "description": "Learn how to use the AI SDK in a Fastify server",
      "tags": [
        "api servers",
        "streaming"
      ],
      "content": "\n# Fastify\n\nYou can use the AI SDK in a [Fastify](https://fastify.dev/) server to generate and stream text and objects to the client.\n\n## Examples\n\nThe examples start a simple HTTP server that listens on port 8080. You can e.g. test it using `curl`:\n\n```bash\ncurl -X POST http://localhost:8080\n```\n\n<Note>\n  The examples use the OpenAI `gpt-4o` model. Ensure that the OpenAI API key is\n  set in the `OPENAI_API_KEY` environment variable.\n</Note>\n\n**Full example**: [github.com/vercel/ai/examples/fast...",
      "path": "cookbook/15-api-servers/40-fastify.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-15-api-servers-50-nest",
      "title": "Nest.js",
      "description": "Learn how to use the AI SDK in a Nest.js server",
      "tags": [
        "api servers",
        "streaming"
      ],
      "content": "\n# Nest.js\n\nYou can use the AI SDK in a [Nest.js](https://nestjs.com/) server to generate and stream text and objects to the client.\n\n## Examples\n\nThe examples show how to implement a Nest.js controller that uses the AI SDK to stream text and objects to the client.\n\n**Full example**: [github.com/vercel/ai/examples/nest](https://github.com/vercel/ai/tree/main/examples/nest)\n\n### Data Stream\n\nYou can use the `pipeDataStreamToResponse` method to get a data stream from the result and then pipe it to...",
      "path": "cookbook/15-api-servers/50-nest.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-15-api-servers-index",
      "title": "API Servers",
      "content": "...",
      "path": "cookbook/15-api-servers/index.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-10-generate-text",
      "title": "Generate Text",
      "description": "Learn how to generate text using the AI SDK and React Server Components.",
      "tags": [
        "rsc"
      ],
      "content": "\n# Generate Text\n\n<Note>\n  This example uses React Server Components (RSC). If you want to client side\n  rendering and hooks instead, check out the [\"generate text\" example with\n  useState](/examples/next-pages/basics/generating-text).\n</Note>\n\nA situation may arise when you need to generate text based on a prompt. For example, you may want to generate a response to a question or summarize a body of text. The `generateText` function can be used to generate text based on the input prompt.\n\n<Brows...",
      "path": "cookbook/20-rsc/10-generate-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-11-generate-text-with-chat-prompt",
      "title": "Generate Text with Chat Prompt",
      "description": "Learn how to generate text with chat prompt using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "chat"
      ],
      "content": "\n# Generate Text with Chat Prompt\n\nPreviously, we were able to generate text and objects using either a single message prompt, a system prompt, or a combination of both of them. However, there may be times when you want to generate text based on a series of messages.\n\nA chat completion allows you to generate text based on a series of messages. This series of messages can be any series of interactions between any number of systems, but the most popular and relatable use case has been a series of ...",
      "path": "cookbook/20-rsc/11-generate-text-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-20-stream-text",
      "title": "Stream Text",
      "description": "Learn how to stream text using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "streaming"
      ],
      "content": "\n# Stream Text\n\n<Note>\n  This example uses React Server Components (RSC). If you want to client side\n  rendering and hooks instead, check out the [\"stream text\" example with\n  useCompletion](/examples/next-pages/basics/streaming-text-generation).\n</Note>\n\nText generation can sometimes take a long time to complete, especially when you're generating a couple of paragraphs. In such cases, it is useful to stream the text generation process to the client in real-time. This allows the client to displa...",
      "path": "cookbook/20-rsc/20-stream-text.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-21-stream-text-with-chat-prompt",
      "title": "Stream Text with Chat Prompt",
      "description": "Learn how to stream text with chat prompt using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "chat"
      ],
      "content": "\n# Stream Text with Chat Prompt\n\nChat completion can sometimes take a long time to finish, especially when the response is big. In such cases, it is useful to stream the chat completion to the client in real-time. This allows the client to display the new message as it is being generated by the model, rather than have users wait for it to finish.\n\n<Browser>\n  <ChatGeneration\n    stream\n    history={[\n      { role: 'User', content: 'How is it going?' },\n      { role: 'Assistant', content: 'All go...",
      "path": "cookbook/20-rsc/21-stream-text-with-chat-prompt.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-30-generate-object",
      "title": "Generate Object",
      "description": "Learn how to generate object using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "structured data"
      ],
      "content": "\n# Generate Object\n\n<Note>\n  This example uses React Server Components (RSC). If you want to client side\n  rendering and hooks instead, check out the [\"generate object\" example with\n  useState](/examples/next-pages/basics/generating-object).\n</Note>\n\nEarlier functions like `generateText` and `streamText` gave us the ability to generate unstructured text. However, if you want to generate structured data like JSON, you can provide a schema that describes the structure of your desired object to the...",
      "path": "cookbook/20-rsc/30-generate-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-40-stream-object",
      "title": "Stream Object",
      "description": "Learn how to stream object using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "streaming",
        "structured data"
      ],
      "content": "\n# Stream Object\n\n<Note>\n  This example uses React Server Components (RSC). If you want to client side\n  rendering and hooks instead, check out the [\"streaming object generation\"\n  example with\n  useObject](/examples/next-pages/basics/streaming-object-generation).\n</Note>\n\nObject generation can sometimes take a long time to complete, especially when you're generating a large schema. In such cases, it is useful to stream the object generation process to the client in real-time. This allows the cl...",
      "path": "cookbook/20-rsc/40-stream-object.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-50-call-tools",
      "title": "Call Tools",
      "description": "Learn how to call tools using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "tool use"
      ],
      "content": "\n# Call Tools\n\nSome models allow developers to provide a list of tools that can be called at any time during a generation. This is useful for extending the capabilities of a language model to either use logic or data to interact with systems external to the model.\n\n<Browser>\n  <ChatGeneration\n    history={[\n      { role: 'User', content: 'How is it going?' },\n      { role: 'Assistant', content: 'All good, how may I help you?' },\n    ]}\n    inputMessage={{\n      role: 'User',\n      content: 'What...",
      "path": "cookbook/20-rsc/50-call-tools.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-51-call-tools-in-parallel",
      "title": "Call Tools in Parallel",
      "description": "Learn how to tools in parallel text using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "tool use"
      ],
      "content": "\n# Call Tools in Parallel\n\nSome language models support calling tools in parallel. This is particularly useful when multiple tools are independent of each other and can be executed in parallel during the same generation step.\n\n<Browser>\n  <ChatGeneration\n    history={[\n      { role: 'User', content: 'How is it going?' },\n      { role: 'Assistant', content: 'All good, how may I help you?' },\n    ]}\n    inputMessage={{\n      role: 'User',\n      content: 'What is the weather in Paris and New York?'...",
      "path": "cookbook/20-rsc/51-call-tools-in-parallel.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-60-save-messages-to-database",
      "title": "Save Messages To Database",
      "description": "Learn how to save messages to an external database using the AI SDK and React Server Components",
      "tags": [
        "rsc",
        "tool use"
      ],
      "content": "\n# Save Messages To Database\n\nSometimes conversations with language models can get interesting and you might want to save the state of so you can revisit it or continue the conversation later.\n\n`createAI` has an experimental callback function called `onSetAIState` that gets called whenever the AI state changes. You can use this to save the AI state to a file or a database.\n\n## Client\n\n```tsx filename='app/layout.tsx'\nimport { ServerMessage } from './actions';\nimport { AI } from './ai';\n\nexport d...",
      "path": "cookbook/20-rsc/60-save-messages-to-database.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-61-restore-messages-from-database",
      "title": "Restore Messages From Database",
      "description": "Learn how to restore messages from an external database using the AI SDK and React Server Components",
      "tags": [
        "rsc",
        "tool use"
      ],
      "content": "\n# Restore Messages from Database\n\nWhen building AI applications, you might want to restore previous conversations from a database to allow users to continue their conversations or review past interactions. The AI SDK provides mechanisms to restore conversation state through `initialAIState` and `onGetUIState`.\n\n## Client\n\n```tsx filename='app/layout.tsx'\nimport { ServerMessage } from './actions';\nimport { AI } from './ai';\n\nexport default function RootLayout({\n  children,\n}: Readonly<{\n  childr...",
      "path": "cookbook/20-rsc/61-restore-messages-from-database.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-90-render-visual-interface-in-chat",
      "title": "Render Visual Interface in Chat",
      "description": "Learn how to generate text using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "generative user interface"
      ],
      "content": "\n# Render Visual Interface in Chat\n\nWe've now seen how a language model can call a function and render a component based on a conversation with the user.\n\nWhen we define multiple functions in [`tools`](/docs/reference/ai-sdk-core/generate-text#tools), it is possible for the model to reason out the right functions to call based on whatever the user's intent is. This means that you can write a bunch of functions without the burden of implementing complex routing logic to run them.\n\n## Client\n\n```t...",
      "path": "cookbook/20-rsc/90-render-visual-interface-in-chat.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-91-stream-updates-to-visual-interfaces",
      "title": "Stream Updates to Visual Interfaces",
      "description": "Learn how to generate text using the AI SDK and React Server Components.",
      "tags": [
        "rsc",
        "streaming",
        "generative user interface"
      ],
      "content": "\n# Stream Updates to Visual Interfaces\n\nIn our previous example we've been streaming react components from the server to the client. By streaming the components, we open up the possibility to update these components based on state changes that occur in the server.\n\n## Client\n\n```tsx filename='app/page.tsx'\n'use client';\n\nimport { useState } from 'react';\nimport { ClientMessage } from './actions';\nimport { useActions, useUIState } from '@ai-sdk/rsc';\nimport { generateId } from 'ai';\n\n// Allow str...",
      "path": "cookbook/20-rsc/91-stream-updates-to-visual-interfaces.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-92-stream-ui-record-token-usage",
      "title": "Record Token Usage after Streaming User Interfaces",
      "description": "Learn how to record token usage after streaming user interfaces using the AI SDK and React Server Components",
      "tags": [
        "rsc",
        "usage"
      ],
      "content": "\n# Record Token Usage after Streaming User Interfaces\n\nWhen you're streaming structured data with [`streamUI`](/docs/reference/ai-sdk-rsc/stream-ui),\nyou may want to record the token usage for billing purposes.\n\n## `onFinish` Callback\n\nYou can use the `onFinish` callback to record token usage.\nIt is called when the stream is finished.\n\n```tsx filename='app/page.tsx'\n'use client';\n\nimport { useState } from 'react';\nimport { ClientMessage } from './actions';\nimport { useActions, useUIState } from ...",
      "path": "cookbook/20-rsc/92-stream-ui-record-token-usage.mdx",
      "category": "cookbook"
    },
    {
      "id": "cookbook-20-rsc-index",
      "title": "React Server Components",
      "content": "...",
      "path": "cookbook/20-rsc/index.mdx",
      "category": "cookbook"
    }
  ],
  "providers": [
    {
      "id": "providers-01-ai-sdk-providers-00-ai-gateway",
      "title": "AI Gateway",
      "description": "Learn how to use the AI Gateway provider with the AI SDK.",
      "content": "\n# AI Gateway Provider\n\nThe [AI Gateway](https://vercel.com/docs/ai-gateway) provider connects you to models from multiple AI providers through a single interface. Instead of integrating with each provider separately, you can access OpenAI, Anthropic, Google, Meta, xAI, and other providers and their models.\n\n## Features\n\n- Access models from multiple providers without having to install additional provider modules/dependencies\n- Use the same code structure across different AI providers\n- Switch b...",
      "path": "providers/01-ai-sdk-providers/00-ai-gateway.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-01-xai",
      "title": "xAI Grok",
      "description": "Learn how to use xAI Grok.",
      "content": "\n# xAI Grok Provider\n\nThe [xAI Grok](https://x.ai) provider contains language model support for the [xAI API](https://x.ai/api).\n\n## Setup\n\nThe xAI Grok provider is available via the `@ai-sdk/xai` module. You can\ninstall it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/xai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/xai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/xai\" dark />\n  </Tab>\n\n  <Tab>\n    <Snippet t...",
      "path": "providers/01-ai-sdk-providers/01-xai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-02-vercel",
      "title": "Vercel",
      "description": "Learn how to use Vercel's v0 models with the AI SDK.",
      "content": "\n# Vercel Provider\n\nThe [Vercel](https://vercel.com) provider gives you access to the [v0 API](https://vercel.com/docs/v0/api), designed for building modern web applications. The v0 models support text and image inputs and provide fast streaming responses.\n\nYou can create your Vercel API key at [v0.dev](https://v0.dev/chat/settings/keys).\n\n<Note>\n  The v0 API is currently in beta and requires a Premium or Team plan with\n  usage-based billing enabled. For details, visit the [pricing\n  page](https...",
      "path": "providers/01-ai-sdk-providers/02-vercel.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-03-openai",
      "title": "OpenAI",
      "description": "Learn how to use the OpenAI provider for the AI SDK.",
      "content": "\n# OpenAI Provider\n\nThe [OpenAI](https://openai.com/) provider contains language model support for the OpenAI responses, chat, and completion APIs, as well as embedding model support for the OpenAI embeddings API.\n\n## Setup\n\nThe OpenAI provider is available in the `@ai-sdk/openai` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/openai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/openai\" dark />\n  </Tab...",
      "path": "providers/01-ai-sdk-providers/03-openai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-04-azure",
      "title": "Azure OpenAI",
      "description": "Learn how to use the Azure OpenAI provider for the AI SDK.",
      "content": "\n# Azure OpenAI Provider\n\nThe [Azure OpenAI](https://azure.microsoft.com/en-us/products/ai-services/openai-service) provider contains language model support for the Azure OpenAI chat API.\n\n## Setup\n\nThe Azure OpenAI provider is available in the `@ai-sdk/azure` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/azure\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/azure\" dark />\n  </Tab>\n  <Tab>\n    <Snippet ...",
      "path": "providers/01-ai-sdk-providers/04-azure.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-05-anthropic",
      "title": "Anthropic",
      "description": "Learn how to use the Anthropic provider for the AI SDK.",
      "content": "\n# Anthropic Provider\n\nThe [Anthropic](https://www.anthropic.com/) provider contains language model support for the [Anthropic Messages API](https://docs.anthropic.com/claude/reference/messages_post).\n\n## Setup\n\nThe Anthropic provider is available in the `@ai-sdk/anthropic` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/anthropic\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/anthropic\" dark />\n  </Tab>...",
      "path": "providers/01-ai-sdk-providers/05-anthropic.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-08-amazon-bedrock",
      "title": "Amazon Bedrock",
      "description": "Learn how to use the Amazon Bedrock provider.",
      "content": "\n# Amazon Bedrock Provider\n\nThe Amazon Bedrock provider for the [AI SDK](/docs) contains language model support for the [Amazon Bedrock](https://aws.amazon.com/bedrock) APIs.\n\n## Setup\n\nThe Bedrock provider is available in the `@ai-sdk/amazon-bedrock` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/amazon-bedrock\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/amazon-bedrock\" dark />\n  </Tab>\n  <Tab>\n    ...",
      "path": "providers/01-ai-sdk-providers/08-amazon-bedrock.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-09-groq",
      "title": "Groq",
      "description": "Learn how to use Groq.",
      "content": "\n# Groq Provider\n\nThe [Groq](https://groq.com/) provider contains language model support for the Groq API.\n\n## Setup\n\nThe Groq provider is available via the `@ai-sdk/groq` module.\nYou can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/groq\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/groq\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/groq\" dark />\n  </Tab>\n\n  <Tab>\n    <Snippet text=\"bun add @ai-sdk/g...",
      "path": "providers/01-ai-sdk-providers/09-groq.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-10-fal",
      "title": "Fal",
      "description": "Learn how to use Fal AI models with the AI SDK.",
      "content": "\n# Fal Provider\n\n[Fal AI](https://fal.ai/) provides a generative media platform for developers with lightning-fast inference capabilities. Their platform offers optimized performance for running diffusion models, with speeds up to 4x faster than alternatives.\n\n## Setup\n\nThe Fal provider is available via the `@ai-sdk/fal` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/fal\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm i...",
      "path": "providers/01-ai-sdk-providers/10-fal.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-100-assemblyai",
      "title": "AssemblyAI",
      "description": "Learn how to use the AssemblyAI provider for the AI SDK.",
      "content": "\n# AssemblyAI Provider\n\nThe [AssemblyAI](https://assemblyai.com/) provider contains language model support for the AssemblyAI transcription API.\n\n## Setup\n\nThe AssemblyAI provider is available in the `@ai-sdk/assemblyai` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/assemblyai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/assemblyai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/assembl...",
      "path": "providers/01-ai-sdk-providers/100-assemblyai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-11-deepinfra",
      "title": "DeepInfra",
      "description": "Learn how to use DeepInfra's models with the AI SDK.",
      "content": "\n# DeepInfra Provider\n\nThe [DeepInfra](https://deepinfra.com) provider contains support for state-of-the-art models through the DeepInfra API, including Llama 3, Mixtral, Qwen, and many other popular open-source models.\n\n## Setup\n\nThe DeepInfra provider is available via the `@ai-sdk/deepinfra` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/deepinfra\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/deepin...",
      "path": "providers/01-ai-sdk-providers/11-deepinfra.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-110-deepgram",
      "title": "Deepgram",
      "description": "Learn how to use the Deepgram provider for the AI SDK.",
      "content": "\n# Deepgram Provider\n\nThe [Deepgram](https://deepgram.com/) provider contains language model support for the Deepgram transcription API.\n\n## Setup\n\nThe Deepgram provider is available in the `@ai-sdk/deepgram` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/deepgram\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/deepgram\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/deepgram\" dark />\n  </T...",
      "path": "providers/01-ai-sdk-providers/110-deepgram.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-120-gladia",
      "title": "Gladia",
      "description": "Learn how to use the Gladia provider for the AI SDK.",
      "content": "\n# Gladia Provider\n\nThe [Gladia](https://gladia.io/) provider contains language model support for the Gladia transcription API.\n\n## Setup\n\nThe Gladia provider is available in the `@ai-sdk/gladia` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/gladia\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/gladia\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/gladia\" dark />\n  </Tab>\n\n  <Tab>\n    <S...",
      "path": "providers/01-ai-sdk-providers/120-gladia.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-140-lmnt",
      "title": "LMNT",
      "description": "Learn how to use the LMNT provider for the AI SDK.",
      "content": "\n# LMNT Provider\n\nThe [LMNT](https://lmnt.com/) provider contains language model support for the LMNT transcription API.\n\n## Setup\n\nThe LMNT provider is available in the `@ai-sdk/lmnt` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/lmnt\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/lmnt\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/lmnt\" dark />\n  </Tab>\n\n  <Tab>\n    <Snippet text=\"bun ...",
      "path": "providers/01-ai-sdk-providers/140-lmnt.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-15-google-generative-ai",
      "title": "Google Generative AI",
      "description": "Learn how to use Google Generative AI Provider.",
      "content": "\n# Google Generative AI Provider\n\nThe [Google Generative AI](https://ai.google.dev) provider contains language and embedding model support for\nthe [Google Generative AI](https://ai.google.dev/api/rest) APIs.\n\n## Setup\n\nThe Google provider is available in the `@ai-sdk/google` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/google\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/google\" dark />\n  </Tab>\n  <T...",
      "path": "providers/01-ai-sdk-providers/15-google-generative-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-150-hume",
      "title": "Hume",
      "description": "Learn how to use the Hume provider for the AI SDK.",
      "content": "\n# Hume Provider\n\nThe [Hume](https://hume.ai/) provider contains language model support for the Hume transcription API.\n\n## Setup\n\nThe Hume provider is available in the `@ai-sdk/hume` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/hume\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/hume\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/hume\" dark />\n  </Tab>\n\n  <Tab>\n    <Snippet text=\"bun a...",
      "path": "providers/01-ai-sdk-providers/150-hume.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-16-google-vertex",
      "title": "Google Vertex AI",
      "description": "Learn how to use the Google Vertex AI provider.",
      "content": "\n# Google Vertex Provider\n\nThe Google Vertex provider for the [AI SDK](/docs) contains language model support for the [Google Vertex AI](https://cloud.google.com/vertex-ai) APIs. This includes support for [Google's Gemini models](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models) and [Anthropic's Claude partner models](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude).\n\n<Note>\n  The Google Vertex provider is compatible with both Node.js and Edge ru...",
      "path": "providers/01-ai-sdk-providers/16-google-vertex.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-160-revai",
      "title": "Rev.ai",
      "description": "Learn how to use the Rev.ai provider for the AI SDK.",
      "content": "\n# Rev.ai Provider\n\nThe [Rev.ai](https://www.rev.ai/) provider contains language model support for the Rev.ai transcription API.\n\n## Setup\n\nThe Rev.ai provider is available in the `@ai-sdk/revai` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/revai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/revai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/revai\" dark />\n  </Tab>\n\n  <Tab>\n    <Snip...",
      "path": "providers/01-ai-sdk-providers/160-revai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-20-mistral",
      "title": "Mistral AI",
      "description": "Learn how to use Mistral.",
      "content": "\n# Mistral AI Provider\n\nThe [Mistral AI](https://mistral.ai/) provider contains language model support for the Mistral chat API.\n\n## Setup\n\nThe Mistral provider is available in the `@ai-sdk/mistral` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/mistral\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/mistral\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/mistral\" dark />\n  </Tab>\n\n  <Tab>\n...",
      "path": "providers/01-ai-sdk-providers/20-mistral.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-24-togetherai",
      "title": "Together.ai",
      "description": "Learn how to use Together.ai's models with the AI SDK.",
      "content": "\n# Together.ai Provider\n\nThe [Together.ai](https://together.ai) provider contains support for 200+ open-source models through the [Together.ai API](https://docs.together.ai/reference).\n\n## Setup\n\nThe Together.ai provider is available via the `@ai-sdk/togetherai` module. You can\ninstall it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/togetherai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/togetherai\" dark />\n  </Tab>\n  <Tab>\n ...",
      "path": "providers/01-ai-sdk-providers/24-togetherai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-25-cohere",
      "title": "Cohere",
      "description": "Learn how to use the Cohere provider for the AI SDK.",
      "content": "\n# Cohere Provider\n\nThe [Cohere](https://cohere.com/) provider contains language and embedding model support for the Cohere chat API.\n\n## Setup\n\nThe Cohere provider is available in the `@ai-sdk/cohere` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/cohere\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/cohere\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/cohere\" dark />\n  </Tab>\n\n  <Tab>\n...",
      "path": "providers/01-ai-sdk-providers/25-cohere.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-26-fireworks",
      "title": "Fireworks",
      "description": "Learn how to use Fireworks models with the AI SDK.",
      "content": "\n# Fireworks Provider\n\n[Fireworks](https://fireworks.ai/) is a platform for running and testing LLMs through their [API](https://readme.fireworks.ai/).\n\n## Setup\n\nThe Fireworks provider is available via the `@ai-sdk/fireworks` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/fireworks\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/fireworks\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/fir...",
      "path": "providers/01-ai-sdk-providers/26-fireworks.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-30-deepseek",
      "title": "DeepSeek",
      "description": "Learn how to use DeepSeek's models with the AI SDK.",
      "content": "\n# DeepSeek Provider\n\nThe [DeepSeek](https://www.deepseek.com) provider offers access to powerful language models through the DeepSeek API, including their [DeepSeek-V3 model](https://github.com/deepseek-ai/DeepSeek-V3).\n\nAPI keys can be obtained from the [DeepSeek Platform](https://platform.deepseek.com/api_keys).\n\n## Setup\n\nThe DeepSeek provider is available via the `@ai-sdk/deepseek` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnp...",
      "path": "providers/01-ai-sdk-providers/30-deepseek.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-40-cerebras",
      "title": "Cerebras",
      "description": "Learn how to use Cerebras's models with the AI SDK.",
      "content": "\n# Cerebras Provider\n\nThe [Cerebras](https://cerebras.ai) provider offers access to powerful language models through the Cerebras API, including their high-speed inference capabilities powered by Wafer-Scale Engines and CS-3 systems.\n\nAPI keys can be obtained from the [Cerebras Platform](https://cloud.cerebras.ai).\n\n## Setup\n\nThe Cerebras provider is available via the `@ai-sdk/cerebras` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnp...",
      "path": "providers/01-ai-sdk-providers/40-cerebras.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-60-replicate",
      "title": "Replicate",
      "description": "Learn how to use Replicate models with the AI SDK.",
      "content": "\n# Replicate Provider\n\n[Replicate](https://replicate.com/) is a platform for running open-source AI models.\nIt is a popular choice for running image generation models.\n\n## Setup\n\nThe Replicate provider is available via the `@ai-sdk/replicate` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/replicate\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/replicate\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn...",
      "path": "providers/01-ai-sdk-providers/60-replicate.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-70-perplexity",
      "title": "Perplexity",
      "description": "Learn how to use Perplexity's Sonar API with the AI SDK.",
      "content": "\n# Perplexity Provider\n\nThe [Perplexity](https://sonar.perplexity.ai) provider offers access to Sonar API - a language model that uniquely combines real-time web search with natural language processing. Each response is grounded in current web data and includes detailed citations, making it ideal for research, fact-checking, and obtaining up-to-date information.\n\nAPI keys can be obtained from the [Perplexity Platform](https://docs.perplexity.ai).\n\n## Setup\n\nThe Perplexity provider is available v...",
      "path": "providers/01-ai-sdk-providers/70-perplexity.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-80-luma",
      "title": "Luma",
      "description": "Learn how to use Luma AI models with the AI SDK.",
      "content": "\n# Luma Provider\n\n[Luma AI](https://lumalabs.ai/) provides state-of-the-art image generation models through their Dream Machine platform. Their models offer ultra-high quality image generation with superior prompt understanding and unique capabilities like character consistency and multi-image reference support.\n\n## Setup\n\nThe Luma provider is available via the `@ai-sdk/luma` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sd...",
      "path": "providers/01-ai-sdk-providers/80-luma.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-90-elevenlabs",
      "title": "ElevenLabs",
      "description": "Learn how to use the ElevenLabs provider for the AI SDK.",
      "content": "\n# ElevenLabs Provider\n\nThe [ElevenLabs](https://elevenlabs.io/) provider contains language model support for the ElevenLabs transcription API.\n\n## Setup\n\nThe ElevenLabs provider is available in the `@ai-sdk/elevenlabs` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/elevenlabs\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install @ai-sdk/elevenlabs\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"yarn add @ai-sdk/elevenla...",
      "path": "providers/01-ai-sdk-providers/90-elevenlabs.mdx",
      "category": "providers"
    },
    {
      "id": "providers-01-ai-sdk-providers-index",
      "title": "AI SDK Providers",
      "description": "Learn how to use AI SDK providers.",
      "content": "\n# AI SDK Providers\n\nThe AI SDK comes with several providers that you can use to interact with different language models:\n\n<OfficialModelCards />\n\nThere are also [community providers](./community-providers) that have been created using the [Language Model Specification](./community-providers/custom-providers).\n\n<CommunityModelCards />\n\n## Provider support\n\nNot all providers support all AI SDK features. Here's a quick comparison of the capabilities of popular models:\n\n| Provider                  ...",
      "path": "providers/01-ai-sdk-providers/index.mdx",
      "category": "providers"
    },
    {
      "id": "providers-02-openai-compatible-providers-01-custom-providers",
      "title": "Writing a Custom Provider",
      "description": "Create a custom provider package for an OpenAI-compatible provider leveraging the AI SDK OpenAI Compatible package.",
      "content": "\n# Writing a Custom Provider\n\nYou can create your own provider package that leverages the AI SDK's [OpenAI Compatible package](https://www.npmjs.com/package/@ai-sdk/openai-compatible). Publishing your provider package to [npm](https://www.npmjs.com/) can give users an easy way to use the provider's models and stay up to date with any changes you may have. Here's an example structure:\n\n### File Structure\n\n```bash\npackages/example/\n├── src/\n│   ├── example-chat-settings.ts       # Chat model types...",
      "path": "providers/02-openai-compatible-providers/01-custom-providers.mdx",
      "category": "providers"
    },
    {
      "id": "providers-02-openai-compatible-providers-30-lmstudio",
      "title": "LM Studio",
      "description": "Use the LM Studio OpenAI compatible API with the AI SDK.",
      "content": "\n# LM Studio Provider\n\n[LM Studio](https://lmstudio.ai/) is a user interface for running local models.\n\nIt contains an OpenAI compatible API server that you can use with the AI SDK.\nYou can start the local server under the [Local Server tab](https://lmstudio.ai/docs/basics/server) in the LM Studio UI (\"Start Server\" button).\n\n## Setup\n\nThe LM Studio provider is available via the `@ai-sdk/openai-compatible` module as it is compatible with the OpenAI API.\nYou can install it with\n\n<Tabs items={['pn...",
      "path": "providers/02-openai-compatible-providers/30-lmstudio.mdx",
      "category": "providers"
    },
    {
      "id": "providers-02-openai-compatible-providers-35-nim",
      "title": "NVIDIA NIM",
      "description": "Use NVIDIA NIM OpenAI compatible API with the AI SDK.",
      "content": "\n# NVIDIA NIM Provider\n\n[NVIDIA NIM](https://www.nvidia.com/en-us/ai/) provides optimized inference microservices for deploying foundation models. It offers an OpenAI-compatible API that you can use with the AI SDK.\n\n## Setup\n\nThe NVIDIA NIM provider is available via the `@ai-sdk/openai-compatible` module as it is compatible with the OpenAI API.\nYou can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/openai-compatible\" dark />\n  </Tab>\n...",
      "path": "providers/02-openai-compatible-providers/35-nim.mdx",
      "category": "providers"
    },
    {
      "id": "providers-02-openai-compatible-providers-40-baseten",
      "title": "Baseten",
      "description": "Use a Baseten OpenAI compatible API with the AI SDK.",
      "content": "\n# Baseten Provider\n\n[Baseten](https://baseten.co/) is a platform for running and testing LLMs.\nIt allows you to deploy models that are OpenAI API compatible that you can use with the AI SDK.\n\n## Setup\n\nThe Baseten provider is available via the `@ai-sdk/openai-compatible` module as it is compatible with the OpenAI API.\nYou can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/openai-compatible\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"n...",
      "path": "providers/02-openai-compatible-providers/40-baseten.mdx",
      "category": "providers"
    },
    {
      "id": "providers-02-openai-compatible-providers-45-heroku",
      "title": "Heroku",
      "description": "Use a Heroku OpenAI compatible API with the AI SDK.",
      "content": "\n# Heroku Provider\n\n[Heroku](https://heroku.com/) is a cloud platform that allows you to deploy and run applications, including AI models with OpenAI API compatibility.\nYou can deploy models that are OpenAI API compatible and use them with the AI SDK.\n\n## Setup\n\nThe Heroku provider is available via the `@ai-sdk/openai-compatible` module as it is compatible with the OpenAI API.\nYou can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-sdk/openai-compa...",
      "path": "providers/02-openai-compatible-providers/45-heroku.mdx",
      "category": "providers"
    },
    {
      "id": "providers-02-openai-compatible-providers-index",
      "title": "OpenAI Compatible Providers",
      "description": "Use OpenAI compatible providers with the AI SDK.",
      "content": "\n# OpenAI Compatible Providers\n\nYou can use the [OpenAI Compatible Provider](https://www.npmjs.com/package/@ai-sdk/openai-compatible) package to use language model providers that implement the OpenAI API.\n\nBelow we focus on the general setup and provider instance creation. You can also [write a custom provider package leveraging the OpenAI Compatible package](/providers/openai-compatible-providers/custom-providers).\n\nWe provide detailed documentation for the following OpenAI compatible providers...",
      "path": "providers/02-openai-compatible-providers/index.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-01-custom-providers",
      "title": "Writing a Custom Provider",
      "description": "Learn how to write a custom provider for the AI SDK",
      "content": "\n# Writing a Custom Provider\n\nThe AI SDK provides a [Language Model Specification](https://github.com/vercel/ai/tree/main/packages/provider/src/language-model/v2) that enables you to create custom providers compatible with the AI SDK. This specification ensures consistency across different providers.\n\n## Publishing Your Provider\n\nPlease publish your custom provider in your own GitHub repository and as an NPM package. You are responsible for hosting and maintaining your provider. Once published, ...",
      "path": "providers/03-community-providers/01-custom-providers.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-02-qwen",
      "title": "Qwen",
      "description": "Learn how to use the Qwen provider.",
      "content": "\n# Qwen Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\n[younis-ahmed/qwen-ai-provider](https://github.com/younis-ahmed/qwen-ai-provider) is a community provider that uses [Qwen](https://www.alibabacloud.com/en/solutions/generative-ai/qwen) to provide language model support for the AI SDK.\n\n## Setup\n\nThe Qwen prov...",
      "path": "providers/03-community-providers/02-qwen.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-03-ollama",
      "title": "Ollama",
      "description": "Learn how to use the Ollama provider.",
      "content": "\n# Ollama Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. It uses the\n  deprecated `.embedding()` method instead of the standard\n  `.textEmbeddingModel()` method. Please wait for the provider to be updated or\n  consider using an [AI SDK 5 compatible provider](/providers/ai-sdk-providers).\n</Note>\n\n[sgomez/ollama-ai-provider](https://github.com/sgomez/ollama-ai-provider) is a community provider that uses [Ollama](https://ollama.com/) to provide langu...",
      "path": "providers/03-community-providers/03-ollama.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-05-a2a",
      "title": "A2A",
      "description": "A2A Protocol Provider for the AI SDK",
      "content": "\n# A2A\n\nThe [dracoblue/a2a-ai-provider](https://github.com/dracoblue/a2a-ai-provider) is a community provider enables the use of [A2A protocol](https://a2aproject.github.io/A2A/specification/) compliant agents with the [AI SDK](https://ai-sdk.dev/). This allows developers to stream, send, and receive text, tool calls, and artifacts using a standardized JSON-RPC interface over HTTP.\n\n<Note type=\"warning\">\n  The `a2a-ai-provider` package is under constant development.\n</Note>\n\nThe provider support...",
      "path": "providers/03-community-providers/05-a2a.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-08-friendliai",
      "title": "FriendliAI",
      "description": "Learn how to use the FriendliAI Provider for the AI SDK.",
      "content": "\n# FriendliAI Provider\n\nThe [FriendliAI](https://friendli.ai/) provider supports both open-source LLMs via [Friendli Serverless Endpoints](https://friendli.ai/products/serverless-endpoints) and custom models via [Dedicated Endpoints](https://friendli.ai/products/dedicated-endpoints).\n\nIt creates language model objects that can be used with the `generateText`, `streamText`, `generateObject`, and `streamObject` functions.\n\n## Setup\n\nThe Friendli provider is available via the `@friendliai/ai-provid...",
      "path": "providers/03-community-providers/08-friendliai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-10-portkey",
      "title": "Portkey",
      "description": "Learn how to use the Portkey provider for the AI SDK.",
      "content": "\n# Portkey Provider\n\n[Portkey](https://portkey.ai/?utm_source=vercel&utm_medium=docs&utm_campaign=integration) natively integrates with the AI SDK to make your apps production-ready and reliable. Import Portkey's Vercel package and use it as a provider in your Vercel AI app to enable all of Portkey's features:\n\n- Full-stack **observability** and **tracing** for all requests\n- Interoperability across **250+ LLMs**\n- Built-in **50+** state-of-the-art guardrails\n- Simple & semantic **caching** to s...",
      "path": "providers/03-community-providers/10-portkey.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-100-built-in-ai",
      "title": "Built-in AI",
      "description": "Learn how to use the Built-in AI provider (browser models) for the AI SDK.",
      "content": "\n# Built-in AI\n\n[jakobhoeg/built-in-ai](https://github.com/jakobhoeg/built-in-ai) is a community provider that serves as the base AI SDK provider for client side in-browser AI models.\nIt currently provides a model provider for Chrome & Edge's native browser AI models via the JavaScript [Prompt API](https://github.com/webmachinelearning/prompt-api), as well as a model provider for using open-source in-browser models with [WebLLM](https://github.com/mlc-ai/web-llm).\n\n> We are also working hard to ...",
      "path": "providers/03-community-providers/100-built-in-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-100-gemini-cli",
      "title": "Gemini CLI",
      "description": "Learn how to use the Gemini CLI community provider to access Google's Gemini models through the official CLI/SDK.",
      "content": "\n# Gemini CLI Provider\n\nThe [ai-sdk-provider-gemini-cli](https://github.com/ben-vargas/ai-sdk-provider-gemini-cli) community provider enables using Google's Gemini models through the [@google/gemini-cli-core](https://www.npmjs.com/package/@google/gemini-cli-core) library and Google Cloud Code endpoints. While it works with both Gemini Code Assist (GCA) licenses and API key authentication, it's particularly useful for developers who want to use their existing GCA subscription rather than paid use...",
      "path": "providers/03-community-providers/100-gemini-cli.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-11-cloudflare-workers-ai",
      "title": "Cloudflare Workers AI",
      "description": "Learn how to use the Cloudflare Workers AI provider for the AI SDK.",
      "content": "\n# Cloudflare Workers AI\n\n[workers-ai-provider](https://github.com/cloudflare/ai/tree/main/packages/workers-ai-provider) is a community provider that allows you to use Cloudflare's [Workers AI](https://ai.cloudflare.com/) models with the AI SDK.\n\n## Setup\n\nThe Cloudflare Workers AI provider is available in the `workers-ai-provider` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add workers-ai-provider\" />\n  </Tab>\n  <Tab>\n    <Snip...",
      "path": "providers/03-community-providers/11-cloudflare-workers-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-12-cloudflare-ai-gateway",
      "title": "Cloudflare AI Gateway",
      "description": "Learn how to use the Cloudflare AI Gateway provider for the AI SDK.",
      "content": "\n# AI Gateway Provider\n\nThe AI Gateway Provider is a library that integrates Cloudflare's AI Gateway with the Vercel AI SDK. It enables seamless access to multiple AI models from various providers through a unified interface, with automatic fallback for high availability.\n\n## Features\n\n- **Runtime Agnostic**: Compatible with Node.js, Edge Runtime, and other JavaScript runtimes supported by the Vercel AI SDK.\n- **Automatic Fallback**: Automatically switches to the next available model if one fail...",
      "path": "providers/03-community-providers/12-cloudflare-ai-gateway.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-13-openrouter",
      "title": "OpenRouter",
      "description": "OpenRouter Provider for the AI SDK",
      "content": "\n# OpenRouter\n\n[OpenRouter](https://openrouter.ai/) is a unified API gateway that provides access to hundreds of AI models from leading providers like Anthropic, Google, Meta, Mistral, and more. The OpenRouter provider for the AI SDK enables seamless integration with all these models while offering unique advantages:\n\n- **Universal Model Access**: One API key for hundreds of models from multiple providers\n- **Cost-Effective**: Pay-as-you-go pricing with no monthly fees or commitments\n- **Transpa...",
      "path": "providers/03-community-providers/13-openrouter.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-14-azure-ai",
      "title": "Azure AI",
      "description": "Learn how to use the @quail-ai/azure-ai-provider for the AI SDK.",
      "content": "\n# Azure Custom Provider for AI SDK\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\nThe **[Quail-AI/azure-ai-provider](https://github.com/QuailAI/azure-ai-provider)** enables unofficial integration with Azure-hosted language models that use Azure's native APIs instead of the standard OpenAI API format.\n\n## Language Models\n...",
      "path": "providers/03-community-providers/14-azure-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-20-sap-ai",
      "title": "SAP AI Core",
      "description": "SAP AI Core Provider for the AI SDK",
      "content": "\n# SAP AI Core\n\n## Important Note\n\n> **Third-Party Provider**: This SAP AI Core provider (`@mymediset/sap-ai-provider`) is developed and maintained by Mymediset, not by SAP SE. While it integrates with official SAP AI Core services, it is not an official SAP product. For official SAP AI solutions, please refer to the [SAP AI Core Documentation](https://help.sap.com/docs/ai-core).\n\n[SAP AI Core](https://help.sap.com/docs/ai-core) is SAP's enterprise-grade AI platform that provides access to leadi...",
      "path": "providers/03-community-providers/20-sap-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-21-crosshatch",
      "title": "Crosshatch",
      "description": "Learn how to use the Crosshatch provider for the AI SDK.",
      "content": "\n# Crosshatch Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\nThe [Crosshatch](https://crosshatch.io) provider supports secure inference from popular language models with permissioned access to data users share, giving responses personalized with complete user context.\n\nIt creates language model objects that can b...",
      "path": "providers/03-community-providers/21-crosshatch.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-5-requesty",
      "title": "Requesty",
      "description": "Requesty Provider for the AI SDK",
      "content": "\n# Requesty\n\n[Requesty](https://requesty.ai/) is a unified LLM gateway that provides access to over 300 large language models from leading providers like OpenAI, Anthropic, Google, Mistral, AWS, and more. The Requesty provider for the AI SDK enables seamless integration with all these models while offering enterprise-grade advantages:\n\n- **Universal Model Access**: One API key for 300+ models from multiple providers\n- **99.99% Uptime SLA**: Enterprise-grade infrastructure with intelligent failov...",
      "path": "providers/03-community-providers/5-requesty.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-60-mixedbread",
      "title": "Mixedbread",
      "description": "Learn how to use the Mixedbread provider.",
      "content": "\n# Mixedbread Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. It uses the\n  deprecated `.embedding()` method instead of the standard\n  `.textEmbeddingModel()` method. Please wait for the provider to be updated or\n  consider using an [AI SDK 5 compatible provider](/providers/ai-sdk-providers).\n</Note>\n\n[patelvivekdev/mixedbread-ai-provider](https://github.com/patelvivekdev/mixedbread-ai-provider) is a community provider that uses [Mixedbread](https:/...",
      "path": "providers/03-community-providers/60-mixedbread.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-61-voyage-ai",
      "title": "Voyage AI",
      "description": "Learn how to use the Voyage AI provider.",
      "content": "\n# Voyage AI Provider\n\n[patelvivekdev/voyage-ai-provider](https://github.com/patelvivekdev/voyageai-ai-provider) is a community provider that uses [Voyage AI](https://www.voyageai.com) to provide Embedding support for the AI SDK.\n\n## Setup\n\nThe Voyage provider is available in the `voyage-ai-provider` module. You can install it with\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add voyage-ai-provider\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install voyage-...",
      "path": "providers/03-community-providers/61-voyage-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-70-mem0",
      "title": "Mem0",
      "description": "Learn how to use the Mem0 AI SDK provider for the AI SDK.",
      "content": "\n# Mem0 Provider\n\nThe [Mem0 Provider](https://github.com/mem0ai/mem0/tree/main/vercel-ai-sdk) is a library developed by [**Mem0**](https://mem0.ai)\nto integrate with the AI SDK.\nThis library brings enhanced AI interaction capabilities to your applications by introducing persistent memory functionality.\n\n<Note type=\"info\">\n  🎉 Exciting news! Mem0 AI SDK now supports <strong>Tools Call</strong>.\n</Note>\n\n## Setup\n\nThe Mem0 provider is available in the `@mem0/vercel-ai-provider` module. You can in...",
      "path": "providers/03-community-providers/70-mem0.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-71-letta",
      "title": "Letta",
      "description": "Learn how to use the Letta AI SDK provider for the AI SDK.",
      "content": "\n# Letta Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\nThe [Letta AI-SDK provider](https://github.com/letta-ai/vercel-ai-sdk-provider) is the official provider for the [Letta](https://docs.letta.com) platform. It allows you to integrate Letta's AI capabilities into your applications using the Vercel AI SDK.\n\n## ...",
      "path": "providers/03-community-providers/71-letta.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-91-anthropic-vertex-ai",
      "title": "Anthropic Vertex",
      "description": "Learn how to use the Anthropic Vertex provider for the AI SDK.",
      "content": "\n# AnthropicVertex Provider\n\n<Note>\n  Anthropic for Google Vertex is also support by the [AI SDK Google Vertex\n  provider](/providers/ai-sdk-providers/google-vertex).\n</Note>\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\n[nalaso/anthropic-vertex-ai](https://github.com/nalaso/anthropic-vertex-ai) is a community provider t...",
      "path": "providers/03-community-providers/91-anthropic-vertex-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-92-spark",
      "title": "Spark",
      "description": "Learn how to use the Spark provider for the AI SDK.",
      "content": "\n# Spark Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\nThe **[Spark provider](https://github.com/klren0312/spark-ai-provider)** contains language model support for the Spark API, giving you access to models like lite, generalv3, pro-128k, generalv3.5, max-32k and 4.0Ultra.\n\n## Setup\n\nThe Spark provider is availa...",
      "path": "providers/03-community-providers/92-spark.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-93-inflection-ai",
      "title": "Inflection AI",
      "description": "Learn how to use the unofficial Inflection AI provider for the AI SDK.",
      "content": "\n# Unofficial Community Provider for AI SDK - Inflection AI\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\nThe **[unofficial Inflection AI provider](https://www.npmjs.com/package/inflection-ai-sdk-provider)** for the [AI SDK](/docs) contains language model support for the [Inflection AI API](https://developers.inflection....",
      "path": "providers/03-community-providers/93-inflection-ai.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-94-langdb",
      "title": "LangDB",
      "description": "Learn how to use LangDB with the AI SDK",
      "content": "\n# LangDB\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\n[LangDB](https://langdb.ai) is a high-performance enterprise AI gateway built in Rust, designed to govern, secure, and optimize AI traffic.\n\nLangDB provides OpenAI-compatible APIs, enabling developers to connect with multiple LLMs by changing just two lines of code....",
      "path": "providers/03-community-providers/94-langdb.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-95-zhipu",
      "title": "Zhipu AI",
      "description": "Learn how to use the Zhipu provider.",
      "content": "\n# Zhipu AI Provider\n\n<Note type=\"warning\">\n  This community provider is not yet compatible with AI SDK 5. Please wait for\n  the provider to be updated or consider using an [AI SDK 5 compatible\n  provider](/providers/ai-sdk-providers).\n</Note>\n\n[Zhipu AI Provider](https://github.com/Xiang-CH/zhipu-ai-provider) is a community provider for the [AI SDK](/). It enables seamless integration with **GLM** and Embedding Models provided on [bigmodel.cn](https://bigmodel.cn/) by [ZhipuAI](https://www.zhip...",
      "path": "providers/03-community-providers/95-zhipu.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-96-sambanova",
      "title": "SambaNova",
      "description": "Learn how to use the SambaNova provider for the AI SDK.",
      "content": "\n# SambaNova Provider\n\n[sambanova-ai-provider](https://github.com/sambanova/sambanova-ai-provider) contains language model support for the SambaNova API.\n\nAPI keys can be obtained from the [SambaNova Cloud Platform](https://cloud.sambanova.ai/apis).\n\n## Setup\n\nThe SambaNova provider is available via the `sambanova-ai-provider` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add sambanova-ai-provider\" dark />\n  </Tab>\n  <Tab>\n    <Sn...",
      "path": "providers/03-community-providers/96-sambanova.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-97-dify",
      "title": "Dify",
      "description": "Learn how to use the Dify provider for the AI SDK.",
      "content": "\n# Dify Provider\n\nThe **[Dify provider](https://github.com/warmwind/dify-ai-provider)** allows you to easily integrate Dify's application workflow with your applications using the AI SDK.\n\n## Setup\n\nThe Dify provider is available in the `dify-ai-provider` module. You can install it with:\n\n```bash\nnpm install dify-ai-provider\n\n# pnpm\npnpm add dify-ai-provider\n\n# yarn\nyarn add dify-ai-provider\n```\n\n## Provider Instance\n\nYou can import `difyProvider` from `dify-ai-provider` to create a provider ins...",
      "path": "providers/03-community-providers/97-dify.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-97-sarvam",
      "title": "Sarvam",
      "description": "Learn how to use the Sarvam AI provider for the AI SDK.",
      "content": "\n# Sarvam Provider\n\nThe Sarvam AI Provider is a library developed to integrate with the AI SDK. This library brings Speech to Text (STT) capabilities to your applications, allowing for seamless interaction with audio and text data.\n\n## Setup\n\nThe Sarvam provider is available in the `sarvam-ai-provider` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add sarvam-ai-provider\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install sarv...",
      "path": "providers/03-community-providers/97-sarvam.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-98-aimlapi",
      "title": "AI/ML API",
      "description": "Learn how to use the AI/ML API provider.",
      "content": "\n# AI/ML API Provider\n\nThe [AI/ML API](https://aimlapi.com/?utm_source=aimlapi-vercel-ai&utm_medium=github&utm_campaign=integration) provider gives access to more than 300 AI models over an OpenAI-compatible API.\n\n## Setup\n\nThe AI/ML API provider is available via the `@ai-ml.api/aimlapi-vercel-ai` module. You can install it with:\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add @ai-ml.api/aimlapi-vercel-ai\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install...",
      "path": "providers/03-community-providers/98-aimlapi.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-99-claude-code",
      "title": "Claude Code",
      "description": "Learn how to use the Claude Code community provider to access Claude through your Pro/Max subscription.",
      "content": "\n# Claude Code Provider\n\nThe [ai-sdk-provider-claude-code](https://github.com/ben-vargas/ai-sdk-provider-claude-code) community provider allows you to access Claude models through the official Claude Code SDK/CLI. While it works with both Claude Pro/Max subscriptions and API key authentication, it's particularly useful for developers who want to use their existing Claude subscription without managing API keys.\n\n## Version Compatibility\n\nThe Claude Code provider supports both AI SDK v4 and v5-bet...",
      "path": "providers/03-community-providers/99-claude-code.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-automatic1111",
      "title": "Automatic1111",
      "description": "Automatic1111 Provider for the AI SDK",
      "content": "\n# Automatic1111\n\n[AUTOMATIC1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) is a popular web interface for Stable Diffusion that provides a comprehensive set of features for image generation. The [Automatic1111 provider](https://github.com/Ponesicek/automatic1111-provider) for the AI SDK enables seamless integration with locally hosted AUTOMATIC1111 instances while offering unique advantages:\n\n- **Local Control**: Full control over your image generation with local Stable Diffusion...",
      "path": "providers/03-community-providers/automatic1111.mdx",
      "category": "providers"
    },
    {
      "id": "providers-03-community-providers-index",
      "title": "Community Providers",
      "description": "Learn how to use Language Model Specification.",
      "content": "\n# Community Providers\n\nThe AI SDK provides a [Language Model Specification](https://github.com/vercel/ai/tree/main/packages/provider/src/language-model/v2).\nYou can [write your own provider](./community-providers/custom-providers) that adheres to the specification and it will be compatible with the AI SDK.\n\nHere are the community providers that implement the Language Model Specification:\n\n<CommunityModelCards />\n...",
      "path": "providers/03-community-providers/index.mdx",
      "category": "providers"
    },
    {
      "id": "providers-04-adapters-01-langchain",
      "title": "LangChain",
      "description": "Learn how to use LangChain with the AI SDK.",
      "content": "\n# LangChain\n\n[LangChain](https://js.langchain.com/docs/) is a framework for developing applications powered by language models.\nIt provides tools and abstractions for working with AI models, agents, vector stores, and other data sources for retrieval augmented generation (RAG).\nHowever, LangChain does not provide a way to easily build UIs or a standard way to stream data to the client.\n\n## Example: Completion\n\nHere is a basic example that uses both the AI SDK and LangChain together with the [Ne...",
      "path": "providers/04-adapters/01-langchain.mdx",
      "category": "providers"
    },
    {
      "id": "providers-04-adapters-02-llamaindex",
      "title": "LlamaIndex",
      "description": "Learn how to use LlamaIndex with the AI SDK.",
      "content": "\n# LlamaIndex\n\n[LlamaIndex](https://ts.llamaindex.ai/) is a framework for building LLM-powered applications. LlamaIndex helps you ingest, structure, and access private or domain-specific data. LlamaIndex.TS offers the core features of LlamaIndex for Python for popular runtimes like Node.js (official support), Vercel Edge Functions (experimental), and Deno (experimental).\n\n## Example: Completion\n\nHere is a basic example that uses both AI SDK and LlamaIndex together with the [Next.js](https://next...",
      "path": "providers/04-adapters/02-llamaindex.mdx",
      "category": "providers"
    },
    {
      "id": "providers-04-adapters-index",
      "title": "Adapters",
      "description": "Learn how to use AI SDK Adapters.",
      "content": "\n# Adapters\n\nAdapters are lightweight integrations that enable you to use\nthe AI SDK UI functions (`useChat` and `useCompletion`)\nwith 3rd party libraries.\n\nThe following adapters are currently available:\n\n- [LangChain](/providers/adapters/langchain)\n- [LlamaIndex](/providers/adapters/llamaindex)\n...",
      "path": "providers/04-adapters/index.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-braintrust",
      "title": "Braintrust",
      "description": "Monitoring and tracing LLM applications with Braintrust",
      "content": "\n# Braintrust Observability\n\nBraintrust is an end-to-end platform for building AI applications. When building with the AI SDK, you can integrate Braintrust to [log](https://www.braintrust.dev/docs/guides/logging), monitor, and take action on real-world interactions.\n\n## Setup\n\nBraintrust natively supports OpenTelemetry and works out of the box with the AI SDK, either via Next.js or Node.js.\n\n### Next.js\n\nIf you are using Next.js, you can use the Braintrust exporter with `@vercel/otel` for the cl...",
      "path": "providers/05-observability/braintrust.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-helicone",
      "title": "Helicone",
      "description": "Monitor and optimize your AI SDK applications with minimal configuration using Helicone",
      "content": "\n# Helicone Observability\n\n[Helicone](https://helicone.ai) is an open-source LLM observability platform that helps you monitor, analyze, and optimize your AI applications through a proxy-based approach, requiring minimal setup and zero additional dependencies.\n\n## Setup\n\nSetting up Helicone:\n\n1. Create a Helicone account at [helicone.ai](https://helicone.ai)\n2. Set your API key as an environment variable:\n   ```bash filename=\".env\"\n   HELICONE_API_KEY=your-helicone-api-key\n   ```\n3. Update your ...",
      "path": "providers/05-observability/helicone.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-index",
      "title": "Observability Integrations",
      "description": "AI SDK Integration for monitoring and tracing LLM applications",
      "content": "\n# Observability Integrations\n\nSeveral LLM observability providers offer integrations with the AI SDK telemetry data:\n\n- [Braintrust](/providers/observability/braintrust)\n- [Helicone](/providers/observability/helicone)\n- [Traceloop](/providers/observability/traceloop)\n- [Weave](/providers/observability/weave)\n- [Langfuse](/providers/observability/langfuse)\n- [LangSmith](/providers/observability/langsmith)\n- [Laminar](/providers/observability/laminar)\n- [LangWatch](/providers/observability/langwa...",
      "path": "providers/05-observability/index.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-laminar",
      "title": "Laminar",
      "description": "Monitor your AI SDK applications with Laminar",
      "content": "\n# Laminar observability\n\n[Laminar](https://www.lmnr.ai) is the open-source platform for tracing and evaluating AI applications.\n\nLaminar features:\n\n- [Tracing compatible with AI SDK and more](https://docs.lmnr.ai/tracing/introduction),\n- [Evaluations](https://docs.lmnr.ai/evaluations/introduction),\n- [Browser agent observability](https://docs.lmnr.ai/tracing/browser-agent-observability)\n\n<Note>\n  A version of this guide is available in [Laminar's\n  docs](https://docs.lmnr.ai/tracing/integration...",
      "path": "providers/05-observability/laminar.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-langfuse",
      "title": "Langfuse",
      "description": "Monitor, evaluate and debug your AI SDK application with Langfuse",
      "content": "\n# Langfuse Observability\n\n[Langfuse](https://langfuse.com/) ([GitHub](https://github.com/langfuse/langfuse)) is an open source LLM engineering platform that helps teams to collaboratively develop, monitor, and debug AI applications. Langfuse integrates with the AI SDK to provide:\n\n- [Application traces](https://langfuse.com/docs/tracing)\n- Usage patterns\n- Cost data by user and model\n- Replay sessions to debug issues\n- [Evaluations](https://langfuse.com/docs/scores/overview)\n\n## Setup\n\nThe AI S...",
      "path": "providers/05-observability/langfuse.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-langsmith",
      "title": "LangSmith",
      "description": "Monitor and evaluate your AI SDK application with LangSmith",
      "content": "\n# LangSmith Observability\n\n[LangSmith](https://docs.smith.langchain.com) is a platform for building production-grade LLM applications.\nIt allows you to closely monitor and evaluate your application, so you can ship quickly and with confidence.\n\nUse of LangChain's open-source frameworks is not necessary.\n\n<Note>\n  A version of this guide is also available in the [LangSmith\n  documentation](https://docs.smith.langchain.com/observability/how_to_guides/tracing/trace_with_vercel_ai_sdk).\n  If you ar...",
      "path": "providers/05-observability/langsmith.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-langwatch",
      "title": "LangWatch",
      "description": "Track, monitor, guardrail and evaluate your AI SDK applications with LangWatch.",
      "content": "\n# LangWatch Observability\n\n[LangWatch](https://langwatch.ai/) ([GitHub](https://github.com/langwatch/langwatch)) is an LLM Ops platform for monitoring, experimenting, measuring and improving LLM pipelines, with a fair-code distribution model.\n\n## Setup\n\nObtain your `LANGWATCH_API_KEY` from the [LangWatch dashboard](https://app.langwatch.com/).\n\n<Tabs items={['pnpm', 'npm', 'yarn', 'bun']}>\n  <Tab>\n    <Snippet text=\"pnpm add langwatch\" dark />\n  </Tab>\n  <Tab>\n    <Snippet text=\"npm install lan...",
      "path": "providers/05-observability/langwatch.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-maxim",
      "title": "Maxim",
      "description": "Evaluate & Observe LLM applications with Maxim",
      "content": "\n# Maxim Observability\n\n[Maxim AI](https://getmaxim.ai) streamlines AI application development and deployment by applying traditional software best practices to non-deterministic AI workflows. Our evaluation and observability tools help teams maintain quality, reliability, and speed throughout the AI application lifecycle. Maxim integrates with the AI SDK to provide:\n\n- Automatic Observability – Adds tracing, logging, and metadata to AI SDK calls with a simple wrapper.\n\n- Unified Model Wrapping ...",
      "path": "providers/05-observability/maxim.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-patronus",
      "title": "Patronus",
      "description": "Monitor, evaluate and debug your AI SDK application with Patronus",
      "content": "\n# Patronus Observability\n\n[Patronus AI](https://patronus.ai) provides an end-to-end system to evaluate, monitor and improve performance of an LLM system, enabling developers to ship AI products safely and confidently. Learn more [here](https://docs.patronus.ai/docs).\n\nWhen you build with the AI SDK, you can stream OpenTelemetry (OTEL) traces straight into Patronus and pair every generation with rich automatic evaluations.\n\n## Setup\n\n### 1. OpenTelemetry\n\nPatronus exposes a fully‑managed OTEL en...",
      "path": "providers/05-observability/patronus.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-signoz",
      "title": "SigNoz",
      "description": "Monitor, obeserve and debug your AI SDK application with SigNoz",
      "content": "\n# SigNoz Observability\n\n[SigNoz](https://signoz.io/) is a single tool for all your monitoring and observability needs. Here are a few reasons why you should choose SigNoz:\n\n- Single tool for observability(logs, metrics, and traces)\n- Built on top of [OpenTelemetry](https://opentelemetry.io/), the open-source standard which frees you from any type of vendor lock-in\n- Correlated logs, metrics and traces for much richer context while debugging\n- Uses ClickHouse (used by likes of Uber & Cloudflare)...",
      "path": "providers/05-observability/signoz.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-traceloop",
      "title": "Traceloop",
      "description": "Monitoring and evaluating LLM applications with Traceloop",
      "content": "\n# Traceloop\n\n[Traceloop](https://www.traceloop.com/) is a development platform for building reliable AI applications.\nAfter integrating with the AI SDK, you can use Traceloop to trace, monitor, and experiment with LLM providers, prompts and flows.\n\n## Setup\n\nTraceloop supports [AI SDK telemetry data](/docs/ai-sdk-core/telemetry) through [OpenTelemetry](https://opentelemetry.io/docs/).\nYou'll need to sign up at https://app.traceloop.com and get an API Key.\n\n### Next.js\n\nTo use the AI SDK to send...",
      "path": "providers/05-observability/traceloop.mdx",
      "category": "providers"
    },
    {
      "id": "providers-05-observability-weave",
      "title": "Weave",
      "description": "Monitor and evaluate LLM applications with Weave.",
      "content": "\n# Weave Observability\n\n[Weave](https://wandb.ai/site/weave) is a toolkit built by [Weights & Biases](https://wandb.ai/site/) for tracking, experimenting with, evaluating, deploying, and improving LLM-based applications.\n\nAfter integrating with the AI SDK, you can use Weave to view and interact with trace information for your AI SDK application including prompts, responses, flow, cost and more.\n\n## Setup\n\nTo set up Weave as an [OpenTelemetry](https://opentelemetry.io/docs/) backend, you'll need ...",
      "path": "providers/05-observability/weave.mdx",
      "category": "providers"
    }
  ]
};

export const getAllMDXData = () => mdxData;

export const getMDXDataByCategory = (category: string) => mdxData[category] || [];

export const getMDXDataById = (id: string) => {
  for (const category of Object.values(mdxData)) {
    const item = category.find(item => item.id === id);
    if (item) return item;
  }
  return null;
};
