"use client";
import Image from "next/image";
import React from "react";
import Parallax from "./Parallax";
import { useLenis } from "@studio-freight/react-lenis";

function ImageData() {
  const lenis = useLenis(({ scroll }) => {
    console.log(scroll);
  });
  return (
    <>
      <button
        className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 mb-16 self-center hover:bg-white/90"
        onClick={() => lenis.scrollTo("#last-image", { lerp: 0.01 })}
      >
        Scroll to Bottom
      </button>

      <Parallax speed={1} className={"self-start"}>
        <Image
          src={"https://picsum.photos/600/400?random=1"}
          alt="Image"
          width={600}
          height={400}
          id="first-image"
        />
      </Parallax>

      <Parallax speed={2} className={"self-end overflow-hidden"}>
        <Image
          src={"https://picsum.photos/600/400?random=2"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Parallax speed={2} className={"self-center"}>
        <Image
          src={"https://picsum.photos/600/400?random=3&grayscale"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Image
        src={"https://picsum.photos/600/400?random=4&grayscale&blur=2"}
        alt="Image"
        width={600}
        height={400}
      />

      <Parallax speed={2} className={"self-end"}>
        <Image
          src={"https://picsum.photos/600/400?random=5"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Image
        src={"https://picsum.photos/600/400?random=6"}
        alt="Image"
        width={600}
        height={400}
      />

      <Parallax speed={-2} className={"self-center"}>
        <Image
          src={"https://picsum.photos/600/400?random=7"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>

      <Image
        src={"https://picsum.photos/600/400?random=8"}
        alt="Image"
        width={600}
        height={400}
      />

      <Parallax speed={-1} className={"self-center overflow-hidden"}>
        <Image
          src={"https://picsum.photos/600/400?random=9"}
          alt="Image"
          width={600}
          height={400}
        />
      </Parallax>
      <Parallax speed={-2} className={"self-end"}>
        <Image
          src={"https://picsum.photos/600/400?random=10"}
          alt="Image"
          width={600}
          height={400}
          id="last-image"
        />
      </Parallax>

      <button
        className="bg-white text-black capitalize p-4 font-semibold text-xl mt-16 self-end hover:bg-white/90"
        onClick={() => lenis.scrollTo("#first-image", { lerp: 0.01 })}
      >
        Back To TOP
      </button>
    </>
  );
}

export default ImageData;
