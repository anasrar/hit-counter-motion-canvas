import {
  Circle,
  Img,
  Layout,
  makeScene2D,
  Node,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import { createRef, createSignal, waitUntil } from "@motion-canvas/core";
import {
  CodeBlock,
  edit,
  insert,
  lines,
} from "@motion-canvas/2d/lib/components/CodeBlock";

export default makeScene2D(function* (view) {
  const codeOpacity = createSignal(0);
  const refCode = createRef<CodeBlock>();
  const imageRefererOpacity = createSignal(0);
  const refRefererFocus = createRef<Rect>();

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
              FILE: routes/counter.svg.tsx
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
            code={`import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";`}
          />
        </Node>
      </Node>
      <Node opacity={imageRefererOpacity}>
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
              IMAGE
            </Txt>
            <Layout layout direction={"row"} gap={16}>
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
            </Layout>
          </Rect>
          <Rect layout>
            <Img src={"/assets/scene/step/referer.png"} />
          </Rect>
        </Rect>
        <Rect
          ref={refRefererFocus}
          offset={[-1, -1]}
          position={[-712, 120]}
          width={600}
          height={40}
          lineWidth={4}
          stroke={"#fa5252"}
          start={0}
          end={0}
          radius={16 * 0.25}
        />
      </Node>
    </>
  );

  yield* codeOpacity(0, 0).to(1, 0.25);
  yield* waitUntil("code-add-deps");
  yield* refCode().edit(1.5)`${insert(`/// <reference lib="deno.unstable" />

`)}import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";${insert(`

const kv = await Deno.openKv();`)}`;
  yield* waitUntil("code-kv-unstable");
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();${insert(`

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;`)}`;
  yield* waitUntil("code-dimension");
  yield* refCode().y(-362 + 16 - 360, 1);
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;${insert(`
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};`)}`;
  yield* waitUntil("code-satori-options");
  yield* refCode().y(-362 + 16 - 880, 1);
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};${insert(`

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {

  return new Response("", {
    status: 200,
  });
};`)}`;
  yield* waitUntil("code-fresh-handler");
  yield* refCode().y(-362 + 16 - 1200, 1);
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
${insert(`  const referer = req.headers.get("referer");

  if (referer) {

  }
`)}
  return new Response("", {
    status: 200,
  });
};`;
  yield* waitUntil("code-referer");
  yield* imageRefererOpacity(0, 0).to(1, 0.25);
  yield* refRefererFocus().end(1, 1);
  yield* waitUntil("code-referer-img");
  yield* imageRefererOpacity(1, 0).to(0, 0.25);
  yield* refCode().y(-362 + 16 - 1400, 1);
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const referer = req.headers.get("referer");

  if (referer) {
${edit(
  "",
  `    const url = new URL(referer);
    const key = ["url", url.origin + url.pathname];

    const result = await kv.get<number>(key);`
)}
  }

  return new Response("", {
    status: 200,
  });
};`;
  yield* waitUntil("code-kv-key");
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const referer = req.headers.get("referer");${insert(`
  let total = 0;`)}

  if (referer) {
    const url = new URL(referer);
    const key = ["url", url.origin + url.pathname];

    const result = await kv.get<number>(key);${insert(`
    total = (result.value ?? 0) + 1;
    await kv.set(key, total);`)}
  }

  return new Response("", {
    status: 200,
  });
};`;
  yield* waitUntil("code-kv-set");
  yield* refCode().y(-362 + 16 - 1870, 1);
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const referer = req.headers.get("referer");
  let total = 0;

  if (referer) {
    const url = new URL(referer);
    const key = ["url", url.origin + url.pathname];

    const result = await kv.get<number>(key);
    total = (result.value ?? 0) + 1;
    await kv.set(key, total);
  }
${insert(`
  const pad = "0".repeat(maxDigits - total.toString().length);
  const svg = await satori(
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: \`\${width}px\`,
        height: \`\${height}px\`,
        border: "3px solid #25262b",
        borderRadius: \`\${height / 6}px\`,
        color: "#f1f3f5",
        background: "#101113",
        fontSize: \`\${16 * 2.25}px\`,
      }}
    >
      <span
        style={{
          color: "#2c2e33",
        }}
      >
        {pad}
      </span>
      {total}
    </div>,
    options,
  );
`)}
  return new Response("", {
    status: 200,
  });
};`;
  yield* waitUntil("code-pad-zero");
  yield* refCode().y(-362 + 16 - 2800, 1);
  yield* refCode().selection(lines(56, 63), 1);
  yield* waitUntil("code-pad-zero-light");
  yield* refCode().selection(lines(65), 1);
  yield* waitUntil("code-satori-options-light");
  yield* refCode().y(-362 + 16 - 3380, 1);
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const referer = req.headers.get("referer");
  let total = 0;

  if (referer) {
    const url = new URL(referer);
    const key = ["url", url.origin + url.pathname];

    const result = await kv.get<number>(key);
    total = (result.value ?? 0) + 1;
    await kv.set(key, total);
  }

  const pad = "0".repeat(maxDigits - total.toString().length);
  const svg = await satori(
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: \`\${width}px\`,
        height: \`\${height}px\`,
        border: "3px solid #25262b",
        borderRadius: \`\${height / 6}px\`,
        color: "#f1f3f5",
        background: "#101113",
        fontSize: \`\${16 * 2.25}px\`,
      }}
    >
      <span
        style={{
          color: "#2c2e33",
        }}
      >
        {pad}
      </span>
      {total}
    </div>,
    options,
  );

  return new Response(${edit(`""`, `svg`)}, {
    status: 200,
  });
};`;
  yield* waitUntil("code-satori-svg");
  yield* refCode().edit(1.5)`/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const referer = req.headers.get("referer");
  let total = 0;

  if (referer) {
    const url = new URL(referer);
    const key = ["url", url.origin + url.pathname];

    const result = await kv.get<number>(key);
    total = (result.value ?? 0) + 1;
    await kv.set(key, total);
  }

  const pad = "0".repeat(maxDigits - total.toString().length);
  const svg = await satori(
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: \`\${width}px\`,
        height: \`\${height}px\`,
        border: "3px solid #25262b",
        borderRadius: \`\${height / 6}px\`,
        color: "#f1f3f5",
        background: "#101113",
        fontSize: \`\${16 * 2.25}px\`,
      }}
    >
      <span
        style={{
          color: "#2c2e33",
        }}
      >
        {pad}
      </span>
      {total}
    </div>,
    options,
  );
${insert(`
  const headers = new Headers({
    "Content-Type": "image/svg+xml",
    "Cache-Control": "no-store",
  });
`)}
  return new Response(svg, {
    status: 200,${insert(`
    headers,`)}
  });
};`;
  yield* waitUntil("code-fresh-headers");
  yield* codeOpacity(1, 0).to(0, 0.25);
});
