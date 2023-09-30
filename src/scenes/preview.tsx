import {
  Circle,
  Img,
  Layout,
  makeScene2D,
  Node,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import {
  CodeBlock,
  edit,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";
import { createRef, createSignal, waitUntil } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const codeOpacity = createSignal(0);
  const refCode = createRef<CodeBlock>();
  const browserOpacity = createSignal(0);
  const counter = createSignal(1);
  const refBrowserTitle = createRef<Txt>();

  view.add(
    <>
      <Node opacity={codeOpacity}>
        <Rect
          layout
          direction={"column"}
          gap={16 * 0.375}
          radius={16 * 0.75}
          clip
          lineWidth={6 * 2}
          stroke={"#495057"}
          shadowOffset={[0, 16 * 0.5]}
          shadowBlur={16 * 0.5}
          shadowColor={"rgba(0, 0, 0, 0.5)"}
          fill={"#495057"}
        >
          <Rect
            layout
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={16}
            fill={"#212529"}
          >
            <Txt
              fill={"#e9ecef"}
              fontFamily={"JetBrains Mono"}
              fontWeight={600}
              fontSize={16 * 2}
            >
              FILE: routes/_404.tsx
            </Txt>
            <Layout layout direction={"row"} gap={16}>
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
            </Layout>
          </Rect>
          <Rect
            offset={[-1, -1]}
            width={1190}
            height={800}
            padding={16}
            fill={"#1a1b26"}
          ></Rect>
        </Rect>
      </Node>
      <Node opacity={codeOpacity}>
        <Node cache>
          <Rect
            offset={[-1, -1]}
            position={[-595, -362]}
            width={1190}
            height={800}
            padding={16}
            fill={"#FFF"}
          ></Rect>
          <CodeBlock
            compositeOperation={"source-in"}
            ref={refCode}
            offset={[-1, -1]}
            position={[-595 + 16, -362 + 16]}
            fontFamily={"JetBrains Mono"}
            fontWeight={600}
            fontSize={16 * 1.75}
            lineHeight={16 * 3.25}
            language="tsx"
            theme={{
              stringContent: { text: "#9ece6a" },
              stringPunctuation: { text: "#9ece6a" },
              parameter: { text: "#e0af68" },
              comment: { text: "#565f89" },
              regexpContent: { text: "#e0af68" },
              literal: { text: "#ff9e64" },
              keyword: { text: "#bb9af7" },
              entityName: { text: "#7aa2f7" },
            }}
            code={`import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}`}
          />
        </Node>
      </Node>
      <Node opacity={browserOpacity}>
        <Rect
          layout
          direction={"column"}
          gap={16 * 0.375}
          radius={16 * 0.75}
          clip
          lineWidth={6 * 2}
          stroke={"#495057"}
          shadowOffset={[0, 16 * 0.5]}
          shadowBlur={16 * 0.5}
          shadowColor={"rgba(0, 0, 0, 0.5)"}
          fill={"#495057"}
        >
          <Rect
            layout
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={16}
            fill={"#212529"}
          >
            <Txt
              ref={refBrowserTitle}
              fill={"#e9ecef"}
              fontFamily={"JetBrains Mono"}
              fontWeight={600}
              fontSize={16 * 2}
            >
              BROWSER: http://localhost:8000/foobar
            </Txt>
            <Layout layout direction={"row"} gap={16}>
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
            </Layout>
          </Rect>
          <Rect offset={[-1, -1]} fill={"#1a1b26"}>
            <Img src={"/assets/scene/preview/404.png"} height={800} />
          </Rect>
        </Rect>
      </Node>
      <Node opacity={browserOpacity}>
        <Rect layout offset={[1, -1]} x={420} y={-222} fill={"#101113"}>
          <Txt
            fill={"#f1f3f5"}
            fontFamily={"JetBrains Mono"}
            fontWeight={500}
            fontSize={16 * 7.3}
            text={() => counter().toFixed(0)}
          />
        </Rect>
      </Node>
    </>
  );

  yield* codeOpacity(0, 0).to(1, 0.25);
  yield* refCode().y(-362 + 16 - 300, 1);
  yield* refCode().selection(lines(10, 16), 1);
  yield* waitUntil("preview-light");
  yield* refCode().edit(1.5)`import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img${edit(
            `
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"`,
            `
            src="/counter.svg"`
          )}
          />
          <h1 class="text-4xl font-bold">404 - Page not found</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="underline">Go back home</a>
        </div>
      </div>
    </>
  );
}`;
  yield* waitUntil("preview-change-src");
  yield* browserOpacity(0, 0).to(1, 0.25);
  yield* codeOpacity(0, 0);
  yield* counter(1, 0).to(5, 3);
  yield* browserOpacity(1, 0).to(0, 0.25);
});
