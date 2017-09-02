import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import { Injectable } from "@angular/core";

@Injectable()
export class ShareService {
  constructor(private socialSharing: SocialSharing, private screenshot: Screenshot) {}

  shareScreenshot() {
    this.screenshot.URI(80)
    .then((res) => {
      this.sharePicture(res.URI)
    },
    () => {
      alert('Screenshot failed');
    });
  }

  sharePicture(picture) {
    this.socialSharing.share('', '', picture).then(() => {},
    () => {
      alert('SocialSharing failed');
    });
  }
}
