import { studioConfig } from "../../sanity/sanity.config";
import { NextStudio } from "next-sanity/studio"

export default function StudioPage() {
  return <NextStudio config={studioConfig} />
}