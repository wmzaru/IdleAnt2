import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MainService } from "./main.service";
import { World } from "./model/world";

// import { ClarityIcons } from "@clr/icons";
import { ClarityIcons } from "@clr/icons";

import {
  ClrShapeBug,
  ClrShapeClock,
  ClrShapeTools,
  ClrShapeWorld
} from "@clr/icons/shapes/essential-shapes";

import { ClrShapeStore } from "@clr/icons/shapes/commerce-shapes";
import {
  ClrShapeAngle,
  ClrShapeAngleDouble,
  ClrShapeCog,
  ClrShapeExclamationTriangle,
  ClrShapeInfoStandard
} from "@clr/icons/shapes/core-shapes";
import { ClrShapePause } from "@clr/icons/shapes/media-shapes";
import { ClrShapeStar } from "@clr/icons/shapes/social-shapes";
import {
  ClrShapeFlask,
  ClrShapeFloppy,
  ClrShapeInstall,
  ClrShapeUninstall
} from "@clr/icons/shapes/technology-shapes";
import { ClrShapePaintRoller } from "@clr/icons/shapes/text-edit-shapes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  travelMessage = false;
  worldTravel: World;
  worldSub: any;

  constructor(public ms: MainService, private router: Router) {
    ClarityIcons.add({
      bug: ClrShapeBug,
      flask: ClrShapeFlask,
      world: ClrShapeWorld,
      clock: ClrShapeClock,
      cog: ClrShapeCog,
      store: ClrShapeStore,
      "exclamation-triangle": ClrShapeExclamationTriangle,
      "angle-double": ClrShapeAngleDouble,
      angle: ClrShapeAngle,
      pause: ClrShapePause,
      infoStandard: ClrShapeInfoStandard,
      floppy: ClrShapeFloppy,
      "paint-roller": ClrShapePaintRoller,
      install: ClrShapeInstall,
      uninstall: ClrShapeUninstall,
      tools: ClrShapeTools,
      star: ClrShapeStar,
      food:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 512px; width: 512px;"><g class="" transform="translate(23,-1)" style="touch-action: none;"><path d="M475.346 189.398a27.276 27.276 0 0 1-38.433-19.066l-30.05 14.232a63.31 63.31 0 0 0-3.586-11.274 59.572 59.572 0 0 0-9.853-15.827l29.222-13.836a27.358 27.358 0 1 1 45.713-5.905 27.358 27.358 0 0 1 6.986 51.676zm-295.59 74.107c13.17 31.015 17.61 63.416 12.508 91.217-4.845 26.39-17.738 45.27-36.303 53.155-18.564 7.885-41.112 4.053-63.46-10.797-23.55-15.63-43.816-41.333-56.942-72.372-13.126-31.038-17.61-63.404-12.497-91.204 4.846-26.392 17.74-45.27 36.304-53.156a51.245 51.245 0 0 1 20.15-4.006c13.718 0 28.556 5.008 43.312 14.803 23.538 15.64 43.757 41.345 56.93 72.36zm-48.79 20.708c-8.29-19.53-25.446-30.922-38.328-25.46-12.88 5.463-16.596 25.728-8.304 45.26 8.293 19.53 25.448 30.92 38.33 25.46 12.88-5.464 16.596-25.73 8.303-45.248zm255.12-103.655c-7.174-16.9-23.21-25.297-40.646-25.297a58.105 58.105 0 0 0-16.736 2.517c-25.75 7.757-51.152 10.482-75.598 10.482-56.22 0-107.347-14.315-146.037-14.315-10.483 0-20.045 1.06-28.547 3.727 17.644-.233 36.337 5.824 54.587 17.948 26.555 17.633 49.196 46.26 63.777 80.594 14.582 34.335 19.508 70.532 13.685 101.885-4.332 23.618-14.29 42.568-28.697 55.204 66.572-20.312 96.748-133.028 185.18-177.762 19.917-10.04 27.732-34.474 19.032-54.96z" fill="#fff" fill-opacity="1"></path></g></svg>'
    });
  }

  ngOnInit(): void {
    this.ms.worldEmitter.subscribe(world => {
      this.worldTravel = world;
      this.travelMessage = true;
    });
  }
  ngOnDestroy(): void {
    this.worldSub.unsubscribe();
  }
  travel() {
    this.travelMessage = false;
    this.ms.game.goToWorld(this.worldTravel);
    this.router.navigateByUrl("/nav/unit/fo");
  }
}
