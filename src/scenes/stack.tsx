import { Img, Layout, makeScene2D, Node, Rect, Txt } from "@motion-canvas/2d";
import { all, createRef, createSignal, waitUntil } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const opacity = createSignal(0);
  const opacityDeno = createSignal(0);
  const opacityFresh = createSignal(0);
  const opacitySatori = createSignal(0);
  const refImgDeno = createRef<Img>();
  const refImgFresh = createRef<Img>();
  const refImgSatori = createRef<Img>();

  view.add(
    <Node opacity={opacity} y={-16 * 6}>
      <Layout layout direction={"row"} alignItems={"center"} gap={16 * 10}>
        <Img
          ref={refImgDeno}
          src={"/assets/scene/stack/deno.png"}
          width={16 * 18}
        />
        <Img
          ref={refImgFresh}
          src={"/assets/scene/stack/fresh.png"}
          width={16 * 18}
        />
        <Img
          ref={refImgSatori}
          src={"/assets/scene/stack/satori.png"}
          width={16 * 18}
        />
      </Layout>
      <Rect
        layout
        position={[-448 + 16 * 9, 16 * 9]}
        offset={[1, 1]}
        fill={"#e9ecef"}
        padding={[16 * 0.5, 16 * 1]}
        radius={16 * 0.75}
        shadowOffset={[0, 16 * 0.5]}
        shadowBlur={16 * 0.25}
        shadowColor={"#101113"}
      >
        <Txt
          fill={"#141517"}
          fontFamily={"JetBrains Mono"}
          fontWeight={700}
          fontSize={16 * 1.75}
        >
          1.36.4
        </Txt>
      </Rect>
      <Rect
        layout
        position={[16 * 9, 16 * 9]}
        offset={[1, 1]}
        fill={"#e9ecef"}
        padding={[16 * 0.5, 16 * 1]}
        radius={16 * 0.75}
        shadowOffset={[0, 16 * 0.5]}
        shadowBlur={16 * 0.25}
        shadowColor={"#101113"}
      >
        <Txt
          fill={"#141517"}
          fontFamily={"JetBrains Mono"}
          fontWeight={700}
          fontSize={16 * 1.75}
        >
          1.4.3
        </Txt>
      </Rect>
      <Rect
        layout
        position={[448 + 16 * 9, 16 * 9]}
        offset={[1, 1]}
        fill={"#e9ecef"}
        padding={[16 * 0.5, 16 * 1]}
        radius={16 * 0.75}
        shadowOffset={[0, 16 * 0.5]}
        shadowBlur={16 * 0.25}
        shadowColor={"#101113"}
      >
        <Txt
          fill={"#141517"}
          fontFamily={"JetBrains Mono"}
          fontWeight={700}
          fontSize={16 * 1.75}
        >
          0.10.4
        </Txt>
      </Rect>
      <Layout
        layout
        direction={"column"}
        alignItems={"center"}
        gap={16 * 1.5}
        position={[-448, 16 * 14]}
        offset={[0, -1]}
        opacity={opacityDeno}
      >
        <Txt
          fill={"#e9ecef"}
          fontFamily={"Inter"}
          fontWeight={700}
          fontSize={16 * 4.5}
        >
          Deno KV
        </Txt>
        <Txt
          fill={"#e9ecef"}
          fontFamily={"Inter"}
          fontWeight={600}
          fontSize={16 * 3}
        >
          Database (Beta)
        </Txt>
      </Layout>
      <Layout
        layout
        direction={"column"}
        alignItems={"center"}
        gap={16 * 1.5}
        position={[0, 16 * 14]}
        offset={[0, -1]}
        opacity={opacityFresh}
      >
        <Txt
          fill={"#e9ecef"}
          fontFamily={"Inter"}
          fontWeight={700}
          fontSize={16 * 4.5}
        >
          Fresh
        </Txt>
        <Txt
          fill={"#e9ecef"}
          fontFamily={"Inter"}
          fontWeight={600}
          fontSize={16 * 3}
        >
          Web Framework
        </Txt>
      </Layout>
      <Layout
        layout
        direction={"column"}
        alignItems={"center"}
        gap={16 * 1.5}
        position={[448, 16 * 14]}
        offset={[0, -1]}
        opacity={opacitySatori}
      >
        <Txt
          fill={"#e9ecef"}
          fontFamily={"Inter"}
          fontWeight={700}
          fontSize={16 * 4.5}
        >
          Satori
        </Txt>
        <Txt
          fill={"#e9ecef"}
          fontFamily={"Inter"}
          fontWeight={600}
          fontSize={16 * 3}
        >
          JSX to SVG
        </Txt>
      </Layout>
    </Node>
  );

  yield* opacity(0, 0).to(1, 0.25);
  yield* all(refImgDeno().scale(1.3, 1), opacityDeno(0, 0).to(1, 0.5));
  yield* waitUntil("deno");
  yield* all(
    refImgDeno().scale(1, 1),
    refImgFresh().scale(1.3, 1),
    opacityFresh(0, 0).to(1, 0.5)
  );
  yield* waitUntil("fresh");
  yield* all(
    refImgFresh().scale(1, 1),
    refImgSatori().scale(1.3, 1),
    opacitySatori(0, 0).to(1, 0.5)
  );
  yield* waitUntil("satori");
  yield* refImgSatori().scale(1, 1);
  yield* opacity(1, 0).to(0, 0.25);
});
