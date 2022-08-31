/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

 const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

const move = (fileId, folderId) => {
  //moves the file with the given file id to the folder with given folder id.
  let file;
  folders.forEach((item) => {
    if (item.files) {
      //check if the file exists
      file = item.files.find((x) => x.id === fileId);
      if (file) {
        item.files = item.files.filter((x) => x.id !== file.id);
      }
    }
  });
  const folder = folders.find((x) => x.id === folderId);
  if (folder && folder.files) {
    folder.files = [...folder.files, file];
  } else {
    folder.files = [file];
  }
  console.log(`File#${fileId} is moved to the folder#${folderId}`);
  console.log(folders);
};

const copy = (fileId, folderId) => {
  //copies the file with the given file id to the folder with given folder id.
  let file;
  folders.forEach((item) => {
    if (item.files) {
      //check if the file exists
      const val = item.files.find((x) => x.id === fileId);
      if (val) file = val;
    }
  });
  const folder = folders.find((x) => x.id === folderId);
  if (folder && folder.files) {
    folder.files = [...folder.files, file];
  } else {
    folder.files = [file];
  }
  console.log(`File#${fileId} is copied to the folder#${folderId}`);
  console.log(folder);
};

const remove = (fileId) => {
  //removes the file
  let file;
  folders.forEach((item) => {
    if (item.files) {
      //check if the file exists
      file = item.files.find((x) => x.id === fileId);
      if (file) {
        item.files = item.files.filter((x) => x.id !== file.id);
      }
    }
  });
  console.log(folders);
};

const removeFolder = (folderId) => {
  //removes the folder
  console.log(folders.filter((x) => x.id !== folderId));
};

const parentFolderOf = (fileId) => {
  //finds the parent folder of the given file.
  let folderNo = [];
  folders.forEach((item) => {
    if (item.files && item.files.find((x) => x.id === fileId)) {
      folderNo.push(item.id);
    }
  });

  console.log(
    folderNo.length > 0
      ? `This file exists in ${
          folderNo.length
        } place.\nFolder number(s) are ${folderNo.toString()}.`
      : "This file does not exist."
  );
};

move(17, 6); // dosyayı klasöre taşıyacak
copy(18, 7); // kopyasını oluşturacak
remove(17); // dosyayı silecek
removeFolder(6); //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17); // ==> 5
