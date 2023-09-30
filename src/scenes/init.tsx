import {
  Circle,
  Img,
  Layout,
  makeScene2D,
  Node,
  Rect,
  Txt,
  Video,
} from "@motion-canvas/2d";
import { CodeBlock, insert } from "@motion-canvas/2d/lib/components/CodeBlock";
import {
  createRef,
  createSignal,
  useLogger,
  waitFor,
  waitUntil,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const logger = useLogger();

  const videoInitOpacity = createSignal(0);
  const refVideoInit = createRef<Video>();
  const codeOpacity = createSignal(0);
  const refCode = createRef<CodeBlock>();
  const imageFontOpacity = createSignal(0);

  view.add(
    <>
      <Node opacity={videoInitOpacity}>
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
              TERMINAL
            </Txt>
            <Layout layout direction={"row"} gap={16}>
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
            </Layout>
          </Rect>
          <Rect layout padding={16} fill={"#1a1b26"}>
            <Video ref={refVideoInit} src={"/assets/scene/init/init4x.mkv"} />
          </Rect>
        </Rect>
      </Node>
      <Node opacity={imageFontOpacity}>
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
          <Rect layout padding={16} fill={"#16161e"}>
            <Img src={"/assets/scene/init/font.png"} />
          </Rect>
        </Rect>
      </Node>
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
              FILE: deno.json
            </Txt>
            <Layout layout direction={"row"} gap={16}>
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
              <Circle width={16 * 1.75} height={16 * 1.75} fill={"#495057"} />
            </Layout>
          </Rect>
          <Rect
            offset={[-1, -1]}
            width={1174.5}
            height={282}
            padding={16}
            fill={"#1a1b26"}
          ></Rect>
        </Rect>
      </Node>
      <Node opacity={codeOpacity}>
        <Node cache>
          <Rect
            offset={[-1, -1]}
            position={[-587, -103]}
            width={1190}
            height={282}
            padding={16}
            fill={"#FFF"}
          ></Rect>
          <CodeBlock
            compositeOperation={"source-in"}
            ref={refCode}
            offset={[-1, -1]}
            position={[-587 + 16, -103 + 16]}
            fontFamily={"JetBrains Mono"}
            fontWeight={600}
            fontSize={16 * 1.75}
            lineHeight={16 * 3.25}
            language="json"
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
            code={`{
  "tasks": {
    "start": "deno run -A --watch=static/,routes/ dev.ts"
  }
}`}
          />
        </Node>
      </Node>
    </>
  );

  yield* videoInitOpacity(0, 0).to(1, 0.25);
  refVideoInit().play();
  yield* waitFor(5);
  refVideoInit().pause();
  yield* codeOpacity(0, 0).to(1, 0.25);
  yield* refCode().edit(1.5)`{
  "tasks": {
    "start": "deno run ${insert(
      `--unstable `
    )}-A --watch=static/,routes/ dev.ts"
  }
}`;
  yield* waitUntil("deno-task");
  yield* codeOpacity(1, 0).to(0, 0.25);
  refVideoInit().play();
  yield* waitFor(5);
  yield* videoInitOpacity(1, 0).to(0, 0.25);
  yield* imageFontOpacity(0, 0).to(1, 0.25);
  yield* waitUntil("font");
  yield* imageFontOpacity(1, 0).to(0, 0.25);
});
