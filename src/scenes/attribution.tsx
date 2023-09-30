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
        <Layout
          layout
          direction={"column"}
          alignItems={"start"}
          gap={16 * 0.75}
        >
          <Txt
            marginBottom={16 * 1.5}
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 4.5}
          >
            Music
          </Txt>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 3.25}
          >
            Mindseye - Interstellar
          </Txt>
          <Txt
            fill={"#adb5bd"}
            fontFamily={"Inter"}
            fontWeight={500}
            fontSize={16 * 2.25}
          >
            freemusicarchive.org/music/MindsEye/interstellar/interstellar/
          </Txt>
        </Layout>
        <Layout
          layout
          direction={"column"}
          alignItems={"start"}
          gap={16 * 0.75}
        >
          <Txt
            marginTop={16 * 1.5}
            marginBottom={16 * 1.5}
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 4.5}
          >
            Font
          </Txt>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 3.25}
          >
            Inter
          </Txt>
          <Txt
            marginBottom={16 * 1.75}
            fill={"#adb5bd"}
            fontFamily={"Inter"}
            fontWeight={500}
            fontSize={16 * 2.25}
          >
            rsms.me/inter/
          </Txt>
          <Txt
            fill={"#dee2e6"}
            fontFamily={"Inter"}
            fontWeight={600}
            fontSize={16 * 3.25}
          >
            JetBrains Mono
          </Txt>
          <Txt
            fill={"#adb5bd"}
            fontFamily={"Inter"}
            fontWeight={500}
            fontSize={16 * 2.25}
          >
            www.jetbrains.com/lp/mono/
          </Txt>
        </Layout>
      </Layout>
    </>
  );

  yield* opacity(0, 0).to(1, 0.25);
  yield* waitFor(3.75);
  yield* opacity(1, 0).to(0, 0.25);
});
