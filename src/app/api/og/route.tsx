import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  // const usdcBuffer = await fetch(new URL('../../../../public/usdc.svg', import.meta.url)).then(
  //     (res) => res.arrayBuffer()
  // );
  // const usdcBase64 = Buffer.from(usdcBuffer).toString('base64');
  // // ------------
  // const usdtBuffer = await fetch(new URL('../../../../public/usdt.svg', import.meta.url)).then(
  //     (res) => res.arrayBuffer()
  // );
  // const usdtBase64 = Buffer.from(usdtBuffer).toString('base64');
  // // ------------

  //   const logoBuffer = await fetch(
  //     new URL("../../../assets/logo.png", import.meta.url)
  //   ).then((res) => res.arrayBuffer());
  //   const logoBase64 = Buffer.from(logoBuffer).toString("base64");
  //   // ------------

  //   // const usdc = `data:image/svg+xml;base64,${usdcBase64}`;
  //   // const usdt = `data:image/svg+xml;base64,${usdtBase64}`;
  //   const logo = `data:image/svg+xml;base64,${logoBase64}`;

  //   const fontData = await fetch(
  //     new URL("../../../fonts/neutral_sans_bold.woff2", import.meta.url)
  //   ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw=" bg-[#09090b] text-white w-full p-4 h-full flex items-center justify-center flex-col">
        <img
          tw="flex items-center justify-center border-black w-[20%] mb-6 p-2"
          src="https://res.cloudinary.com/dazeowi1e/image/upload/f_auto,q_auto/v1/portfolio/d8tdxef7b8kdkiaeqtr7"
        />
        <div tw="text-[3rem]">Aman Kumar Bairagi</div>
        <div tw="">Passionate Frontend Developer</div>
        <div tw="text-[1rem] absolute bottom-4 opacity-50">
          Reachout : amanbairagi1089@gmail.com
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #667eea  0%, #ffff 40%)",
            width: "20rem",
            height: "20rem",
            filter: "blur(130px)",
            borderRadius: "50%",
            display: "flex",
            position: "absolute",
            opacity: "0.5",
            top: "-100px",
            right: "-40px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "main",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(135deg, #667eea  0%, #ffff 40%)",
            width: "20rem",
            height: "20rem",
            filter: "blur(130px)",
            borderRadius: "50%",
            display: "flex",
            position: "absolute",
            bottom: "-100px",
            left: "-40px",
            flexDirection: "column",
            alignItems: "center",
            opacity: "0.5",
            justifyContent: "center",
            fontFamily: "main",
          }}
        ></div>
      </div>
      // {
      //   fonts: [
      //     {
      //       name: "main",
      //       data: fontData,
      //       style: "normal",
      //     },
      //   ],
      // }
    )
  );
}
