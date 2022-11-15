import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import siteSettings from "./schemas/siteSettings";
import structure from "./deskStructure/structure";
import homepage from "./schemas/pages/homepage";
import quienesSomos from "./schemas/pages/quienesSomos";
import model from "./schemas/documents/model";
import brand from "./schemas/documents/brand";
import car from "./schemas/documents/car";
import moto from "./schemas/documents/moto";
import bici from "./schemas/documents/bici";
import scooter from "./schemas/documents/scooter";
import featuredAds from "./schemas/pages/featuredAds";
import vendeTuVehiculo from "./schemas/pages/vendeTuVehiculo";
import {visionTool} from '@sanity/vision'
import preguntasFrecuentes from "./schemas/pages/preguntasFrecuentes";

export const sanityConfig = {
  projectId: "yqg1fsel",
  dataset: "production",
  apiVersion: "2021-10-21",
  title: "Elígelo",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure,
    }),
    visionTool({
      defaultApiVersion: '2022-08-15', // optional
      defaultDataset: 'production'    // optional
    }),

  ],
  schema: {
    types: [
      // settings
      siteSettings,
      
      // pages
      homepage, 
      quienesSomos, 
      featuredAds,
      vendeTuVehiculo,
      preguntasFrecuentes,

      // documents
      car,
      moto,
      bici,
      scooter,
      model, 
      brand, 
    ],
  },
};

export const studioConfig = defineConfig(sanityConfig);
