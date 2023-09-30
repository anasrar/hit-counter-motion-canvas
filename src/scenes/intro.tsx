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
  const counter = createSignal(1);
  const imageHitWebCounterOpacity = createSignal(0);
  const refTxTReference = createRef<Txt>();
  const refCounter = createRef<Txt>();

  view.add(
    <>
      <Node>
        <Node opacity={imageHitWebCounterOpacity}>
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
              <Img
                src={"/assets/scene/intro/hitwebcounter.png"}
                height={16 * 54}
              />
            </Rect>
          </Rect>
        </Node>
      </Node>
      <Layout ref={refCounter} layout direction={"row"} opacity={0}>
        <Txt
          fill={"#2c2e33"}
          fontFamily={"JetBrains Mono"}
          fontWeight={600}
          fontSize={16 * 12}
          text={() => "0".repeat(5 - counter().toFixed(0).toString().length)}
        />
        <Txt
          fill={"#e9ecef"}
          fontFamily={"JetBrains Mono"}
          fontWeight={600}
          fontSize={16 * 12}
          text={() => counter().toFixed(0)}
        />
      </Layout>
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
          www.hitwebcounter.com
        </Txt>
      </Rect>
    </>
  );

  yield* all(
    showReference(1, 0).to(0, 1),
    imageHitWebCounterOpacity(0, 0).to(1, 0.25)
  );
  yield* waitUntil("hitwebcounter");
  yield* all(
    showReference(0, 0).to(1, 1),
    imageHitWebCounterOpacity(1, 0).to(0, 0.25)
  );
  yield* refCounter().opacity(1, 0.25);
  yield* counter(1, 0).to(16, 3);
  yield* counter(16, 0).to(9999, 2);
  yield* refCounter().opacity(0, 0.25);
});
