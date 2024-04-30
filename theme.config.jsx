import Image from "next/image";

export default {
  logo: (
    <>
      <Image src={"/dart.svg"} height={30} width={30} alt="dart logo"></Image>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Quantum Fetch</span>
    </>
  ),
  project: {
    link: "https://github.com/santoshacharya2468/flutter_quantum_fetch",
  },
};
