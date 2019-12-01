import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {
  public text = new FormControl('');
  public fileHandle;

  public async onImportClick() {
    this.fileHandle = await window.chooseFileSystemEntries();
    const file = await this.fileHandle.getFile();
    const contents = await file.text();
    this.text.setValue(contents);
  }

  public async onSaveClick() {
    this.fileHandle = await this.getNewFileHandle();
    const writer = await this.fileHandle.createWriter();
    await writer.truncate(0);
    await writer.write(0, this.text.value);
    await writer.close();
  }

  private getNewFileHandle() {
    const opts = {
      type: 'saveFile',
      accepts: [{
        description: 'Text file',
        extensions: ['txt'],
        mimeTypes: ['text/plain'],
      }],
    };
    const handle = window.chooseFileSystemEntries(opts);
    return handle;
  };
}
