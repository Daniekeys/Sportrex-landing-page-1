import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "04u2zcbi",
  dataset: "production",
  apiVersion: "v1", // use current UTC date - see "specifying API version"!
  token:
    "skHLCnzFhNVPqumvaLRjiVDPAY5xf3zN5RY6ULeDEtHcJtqm2VmvCK2RT30h3V4Rl6P6l6fhdlHG01pQHEFfiVUM3hxeUf5S7ijsi0g4NW6LMABtAMm7VLLklHBtgBLdTwiDWhGaLzgz8bYmiQFWmBbjGflTjrLMXMLPyH8WL8STj6qQKf8e", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
