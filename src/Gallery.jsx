import React from "react";
import HornedBeast from "./HornedBeast";

function Gallery() {
  return (
    <div>
      <HornedBeast
        title="Rhino"
        imageUrl="https://qph.cf2.quoracdn.net/main-qimg-56f8c2f211bea1445f74e27fa1bb9f26-lq"
        description="Rhinoceroses are universally recognized by their massive bodies, stumpy legs and either one or two dermal horns. In some species, the horns may be short or not obvious."
      />

      <HornedBeast
        title="Antelope"
        imageUrl="https://qph.cf2.quoracdn.net/main-qimg-2f5f5ce3229fa6088a9c6d1ca946eed9-c"
        description="Antelopes are noted for their beauty, grace, and speed in running. Most are distinguished by upswept, back-curving horns."
      />
    </div>
  );
}

export default Gallery;
