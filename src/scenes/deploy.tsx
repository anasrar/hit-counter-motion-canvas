import {
  Circle,
  Img,
  Layout,
  makeScene2D,
  Node,
  Rect,
  Txt,
} from "@motion-canvas/2d";
import { all, createRef, createSignal, waitUntil } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const showReference = createSignal(1);
  const refTxTReference = createRef<Txt>();
  const imageDenoDeployOpacity = createSignal(0);
  const imagePreviewOpacity = createSignal(0);

  view.add(
    <>
      <Node opacity={imageDenoDeployOpacity}>
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
          <Rect layout fill={"#16161e"}>
            <Img src={"/assets/scene/deploy/deno-deploy.png"} height={800} />
          </Rect>
        </Rect>
      </Node>
      <Node opacity={imagePreviewOpacity}>
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
          <Rect layout fill={"#16161e"}>
            <Img src={"/assets/scene/deploy/preview.png"} height={900} />
          </Rect>
        </Rect>
      </Node>
      <Rect
        layout
        offset={[-1, -1]}
        x={-960 + 16 * 3}
        y={() => {
          return -540 - 16 * 10 * showReference() + 16 * 3;
        }}
        fill={"#e9ecef"}
        padding={[16 * 0.75, 16 * 2.25]}
        radius={16 * 0.75}
        shadowOffset={[0, 16 * 0.5]}
        shadowBlur={16 * 0.25}
        shadowColor={"#101113"}
      >
        <Txt
          ref={refTxTReference}
          fill={"#141517"}
          fontFamily={"JetBrains Mono"}
          fontWeight={600}
          fontSize={16 * 2}
        >
          deno.com/deploy
        </Txt>
      </Rect>
    </>
  );

  yield* all(
    showReference(1, 0).to(0, 1),
    imageDenoDeployOpacity(0, 0).to(1, 0.25)
  );
  yield* waitUntil("deploy-deno-deploy");
  yield* all(
    showReference(0, 0).to(1, 1),
    imageDenoDeployOpacity(1, 0).to(0, 0.25)
  );
  yield* refTxTReference().text("fresh-hit-counter.deno.dev", 0);
  yield* all(
    showReference(1, 0).to(0, 1),
    imagePreviewOpacity(0, 0).to(1, 0.25)
  );
  yield* waitUntil("deploy-preview");
  yield* all(
    showReference(0, 0).to(1, 1),
    imagePreviewOpacity(1, 0).to(0, 0.25)
  );
});
