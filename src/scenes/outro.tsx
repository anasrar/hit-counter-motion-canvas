import { Layout, makeScene2D, Txt } from "@motion-canvas/2d";
import { createSignal, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const opacity = createSignal(0);

  view.add(
    <>
      <Layout
        layout
        offset={[-1, 0]}
        position={[16 * -54, 0]}
        direction={"column"}
        alignItems={"start"}
        gap={16 * 2.5}
        opacity={opacity}
      >
        <Layout layout direction={"column"} alignItems={"start"} gap={16 * 1}>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 4}
          >
            Demo
          </Txt>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={500}
            fontSize={16 * 2.25}
          >
            fresh-hit-counter.deno.dev
          </Txt>
        </Layout>
        <Layout layout direction={"column"} alignItems={"start"} gap={16 * 1}>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 4}
          >
            Repository
          </Txt>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={500}
            fontSize={16 * 2.25}
          >
            github.com/anasrar/fresh-hit-counter
          </Txt>
        </Layout>
      </Layout>
    </>
  );

  yield* opacity(0, 0).to(1, 0.25);
  yield* waitFor(3.75);
  yield* opacity(1, 0).to(0, 0.25);
});
