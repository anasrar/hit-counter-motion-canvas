import { Layout, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import { all, createRef, createSignal } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const counter = createSignal(1);
  const showReference = createSignal(1);
  const refTxTReference = createRef<Txt>();
  const refTxTMain = createRef<Txt>();
  const refCounter = createRef<Layout>();

  view.add(
    <>
      <Node>
        <Txt
          ref={refTxTMain}
          fill={"#e9ecef"}
          fontFamily={"JetBrains Mono"}
          fontWeight={600}
          fontSize={16 * 9}
        ></Txt>
      </Node>
      <Layout
        ref={refCounter}
        layout
        direction={"row"}
        opacity={0}
        position={[0, 16 * 12]}
      >
        <Txt
          fill={"#2c2e33"}
          fontFamily={"JetBrains Mono"}
          fontWeight={600}
          fontSize={16 * 8}
          text={() => "0".repeat(5 - counter().toFixed(0).toString().length)}
        />
        <Txt
          fill={"#e9ecef"}
          fontFamily={"JetBrains Mono"}
          fontWeight={600}
          fontSize={16 * 8}
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
          www.jetbrains.com/lp/mono/
        </Txt>
      </Rect>
    </>
  );

  yield* all(
    showReference(1, 0).to(0, 1),
    refTxTMain().text("JetBrains Mono", 1.5),
    refCounter().opacity(1, 1),
    counter(1, 0).to(9999, 1)
  );
  yield* all(
    showReference(0, 0).to(1, 1),
    refTxTMain().text("", 1),
    refCounter().opacity(0, 1)
  );
});
