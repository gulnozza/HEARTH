import Image from "next/image";
import { assetPath } from "@/lib/assets";

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label="HEARTH home">
      <span className="brand-mark mascot-mark" aria-hidden="true">
        <Image src={assetPath("/hearth-mascot-head.png")} alt="" width={47} height={46} />
      </span>
      HEARTH
    </a>
  );
}
