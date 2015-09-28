/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class BaseCarousel extends AMP.BaseElement {

  /** @override */
  buildCallback() {
    /** @private {!Element} */
    this.prevButton_;

    /** @private {!Element} */
    this.nextButton_;

    this.buildCarousel();
    this.buildButtons();
    this.setupGestures();
    this.setControlsState();

    if (this.element.hasAttribute('controls')) {
      this.element.classList.add('-amp-carousel-has-controls');
    }
  }

  buildButtons() {
    this.prevButton_ = document.createElement('div');
    this.prevButton_.classList.add('amp-carousel-button');
    this.prevButton_.classList.add('amp-carousel-button-prev');
    this.prevButton_.setAttribute('role', 'button');
    this.prevButton_.onclick = () => {
      if (!this.prevButton_.classList.contains('amp-disabled')) {
        this.go(-1, true);
        this.setControlsState();
      }
    };
    this.element.appendChild(this.prevButton_);

    this.nextButton_ = document.createElement('div');
    this.nextButton_.classList.add('amp-carousel-button');
    this.nextButton_.classList.add('amp-carousel-button-next');
    this.nextButton_.setAttribute('role', 'button');
    this.nextButton_.onclick = () => {
      if (!this.nextButton_.classList.contains('amp-disabled')) {
        this.go(1, true);
        this.setControlsState();
      }
    };
    this.element.appendChild(this.nextButton_);
  }

  /** @override */
  prerenderAllowed() {
    return true;
  }

  /** @override */
  isRelayoutNeeded() {
    return true;
  }

  /**
   * Subclasses should override this method to build the UI for the carousel.
   */
  buildCarousel() {
    // Subclasses may override.
  }

  /**
   * Subclasses should override this method to configure gestures for carousel.
   */
  setupGestures() {
    // Subclasses may override.
  }

  /**
   * Override in subclass to provide a way to switch to an image through its
   * index placement.
   * Proceeds to the next slide in the desired direction.
   * @param {number} dir -1 or 1
   * @param {boolean} animate
   */
  go() {
    // Subclasses may override.
  }

  /**
   * Override in subclass to set any control visual state etc.
   */
  setControlsState() {
    // Subclasses may override.
  }

  /**
   * @return {boolean}
   * @override
   */
  isReadyToBuild() {
    return this.getRealChildren().length > 0;
  }
}
