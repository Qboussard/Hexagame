import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';
import {Injectable} from "@angular/core";

@Injectable()
export class ShareService {
  constructor(private socialSharing: SocialSharing, private screenshot: Screenshot) {}

  shareScreenshot() {
    this.screenshot.URI(80)
    .then((res) => {
      this.socialSharing.share('', '', res.URI)
      .then(() => {},
        () => {
          alert('SocialSharing failed');
        });
    },
    () => {
      alert('Screenshot failed');
    });
  }
}
