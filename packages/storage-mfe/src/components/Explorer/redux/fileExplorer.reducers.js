export const fileExplorerInitialState = {
  isLoading: false,
  files: {
    rootFolderId: 'qwerty123456',
    fileMap: {
      qwerty123456: {
        id: 'qwerty123456',
        name: 'Root Folder',
        isDir: true,
        childrenIds: ['e598a85f843c', '002705459ca4', '549c1f93247a', 'zFe', 'zJr', 'TestFolder'],
        childrenCount: 6,
      },
      e598a85f843c: {
        id: 'e598a85f843c',
        name: 'Chonky Source Code',
        isDir: true,
        modDate: '2020-10-24T17:48:39.866Z',
        childrenIds: ['9514a3d74d57', 'ed918037b975', 'c21e08daf308', '0729af954fe6', 'b4344ec9eb06', '0b05bc983fd9'],
        childrenCount: 13,
        parentId: 'qwerty123456',
      },
      '9514a3d74d57': {
        id: '9514a3d74d57',
        name: '.eslintrc.js',
        isHidden: true,
        size: 2293,
        modDate: '2020-10-20T03:11:50.570Z',
        parentId: 'e598a85f843c',
        color: '#c0c8d0',
      },
      ed918037b975: {
        id: 'ed918037b975',
        name: '.gitignore',
        isHidden: true,
        size: 347,
        modDate: '2020-10-20T13:22:59.144Z',
        parentId: 'e598a85f843c',
      },
      c21e08daf308: {
        id: 'c21e08daf308',
        name: '.prettierrc.js',
        isHidden: true,
        size: 144,
        modDate: '2020-10-20T03:11:50.570Z',
        parentId: 'e598a85f843c',
      },
      '0729af954fe6': {
        id: '0729af954fe6',
        name: '.test.yml',
        isHidden: true,
        size: 191,
        modDate: '2020-10-24T16:43:46.520Z',
        parentId: 'e598a85f843c',
      },
      e6b2e6181d54: {
        id: 'e6b2e6181d54',
        name: 'logo',
        isDir: true,
        modDate: '2020-10-21T15:59:46.786Z',
        parentId: 'e598a85f843c',
        childrenIds: ['148ffc6cc2e0'],
        childrenCount: 6,
      },
      '148ffc6cc2e0': {
        id: '148ffc6cc2e0',
        name: 'chonky-logo-v2.png',
        size: 74588,
        modDate: '2020-10-21T15:55:52.555Z',
        parentId: 'e6b2e6181d54',
        thumbnailUrl: '/thumbnails/148ffc6cc2e0.jpg',
      },
      b4344ec9eb06: {
        id: 'b4344ec9eb06',
        name: 'packages',
        isDir: true,
        modDate: '2020-10-20T04:16:50.196Z',
        parentId: 'e598a85f843c',
        childrenIds: ['43d749c47bbe'],
        childrenCount: 2,
        color: '#697582',
      },
      '43d749c47bbe': {
        id: '43d749c47bbe',
        name: 'chonky-icon-fontawesome',
        isDir: true,
        modDate: '2020-10-24T18:33:09.643Z',
        parentId: 'b4344ec9eb06',
        childrenIds: ['a4c13c4816f4', 'b2007bcba768', '70543cbe2624', 'e9e4f67dc916', '56cb4f7c8489', '51e3d64a108a'],
        childrenCount: 6,
      },
      a4c13c4816f4: {
        id: 'a4c13c4816f4',
        name: 'LICENSE',
        size: 1103,
        modDate: '2020-10-22T04:05:02.193Z',
        parentId: '43d749c47bbe',
      },
      b2007bcba768: {
        id: 'b2007bcba768',
        name: 'README.md',
        size: 160,
        modDate: '2020-10-20T04:16:50.196Z',
        parentId: '43d749c47bbe',
      },
      '70543cbe2624': {
        id: '70543cbe2624',
        name: 'package-lock.json',
        size: 60041,
        modDate: '2020-10-24T17:55:59.632Z',
        parentId: '43d749c47bbe',
      },
      e9e4f67dc916: {
        id: 'e9e4f67dc916',
        name: 'package.json',
        size: 1235,
        modDate: '2020-10-24T18:33:09.643Z',
        parentId: '43d749c47bbe',
      },
      '56cb4f7c8489': {
        id: '56cb4f7c8489',
        name: 'src',
        isDir: true,
        modDate: '2020-10-20T13:09:34.294Z',
        parentId: '43d749c47bbe',
        childrenIds: ['3c8091a3c0ab', '456be3cd3136'],
        childrenCount: 2,
      },
      '3c8091a3c0ab': {
        id: '3c8091a3c0ab',
        name: 'ChonkyIconFA.tsx',
        size: 311,
        modDate: '2020-10-24T16:39:43.439Z',
        parentId: '56cb4f7c8489',
      },
      '456be3cd3136': {
        id: '456be3cd3136',
        name: 'index.ts',
        size: 47,
        modDate: '2020-10-20T13:09:44.914Z',
        parentId: '56cb4f7c8489',
      },
      '51e3d64a108a': {
        id: '51e3d64a108a',
        name: 'tsconfig.json',
        size: 132,
        modDate: '2020-10-20T13:13:55.871Z',
        parentId: '43d749c47bbe',
      },
      '0b05bc983fd9': {
        id: '0b05bc983fd9',
        name: 'react.tsconfig.json',
        size: 648,
        modDate: '2020-10-20T13:13:02.620Z',
        parentId: 'e598a85f843c',
      },
      '002705459ca4': {
        id: '002705459ca4',
        name: 'Empty folder',
        isDir: true,
        modDate: '2020-07-18T22:27:23.864Z',
        childrenIds: [],
        childrenCount: 0,
        parentId: 'qwerty123456',
      },
      a09fd90e8a3e: {
        id: 'a09fd90e8a3e',
        name: 'Level 8',
        isDir: true,
        modDate: '2020-06-27T13:32:36.993Z',
        parentId: 'eb6ef39dcf7e',
        childrenIds: ['8e7120860c41'],
        childrenCount: 1,
      },
      '8e7120860c41': {
        id: '8e7120860c41',
        name: 'Level 9',
        isDir: true,
        modDate: '2020-06-27T13:32:40.877Z',
        parentId: 'a09fd90e8a3e',
        childrenIds: ['3dc12662a950'],
        childrenCount: 1,
      },
      '3dc12662a950': {
        id: '3dc12662a950',
        name: 'Level 10',
        isDir: true,
        modDate: '2020-06-27T13:32:44.009Z',
        parentId: '8e7120860c41',
        childrenIds: ['1062ab9dec65'],
        childrenCount: 1,
      },
      '1062ab9dec65': {
        id: '1062ab9dec65',
        name: 'Level 11',
        isDir: true,
        modDate: '2020-06-27T13:32:46.497Z',
        parentId: '3dc12662a950',
        childrenIds: ['ca09fe075bf4'],
        childrenCount: 1,
      },
      ca09fe075bf4: {
        id: 'ca09fe075bf4',
        name: 'Level 12',
        isDir: true,
        modDate: '2020-06-27T13:32:49.597Z',
        parentId: '1062ab9dec65',
        childrenIds: ['29fda22251ec'],
        childrenCount: 1,
      },
      '29fda22251ec': {
        id: '29fda22251ec',
        name: 'Level 13',
        isDir: true,
        modDate: '2020-06-27T13:32:52.861Z',
        parentId: 'ca09fe075bf4',
        childrenIds: ['8270c2231d78'],
        childrenCount: 1,
      },
      '8270c2231d78': {
        id: '8270c2231d78',
        name: 'Level 14',
        isDir: true,
        modDate: '2020-06-27T13:32:56.657Z',
        parentId: '29fda22251ec',
        childrenIds: ['e3c798d6abf7'],
        childrenCount: 1,
      },
      e3c798d6abf7: {
        id: 'e3c798d6abf7',
        name: 'Level 15',
        isDir: true,
        modDate: '2020-06-27T13:34:35.083Z',
        parentId: '8270c2231d78',
        childrenIds: ['d2551145553d'],
        childrenCount: 1,
      },
      d2551145553d: {
        id: 'd2551145553d',
        name: 'Bigfoot Footage.avi',
        size: 3601921,
        modDate: '2020-06-27T13:34:35.083Z',
        parentId: 'e3c798d6abf7',
      },
      '549c1f93247a': {
        id: '549c1f93247a',
        name: 'Files that load forever',
        isDir: true,
        modDate: '2020-06-27T13:58:16.428Z',
        childrenIds: ['34308fe0264f', '79e0e1372800', 'a358142e72e3'],
        childrenCount: 3,
        parentId: 'qwerty123456',
      },
      '34308fe0264f': null,
      '79e0e1372800': null,
      a358142e72e3: null,
      zFe: {
        id: 'zFe',
        name: '.hidden.txt',
        isHidden: true,
        modDate: '1997-04-26T11:00:00.000Z',
        size: 42,
        parentId: 'qwerty123456',
      },
      zJr: {
        id: 'zJr',
        name: 'encrypted.zip',
        isEncrypted: true,
        modDate: '2020-10-24T19:10:17.659Z',
        size: 1337,
        parentId: 'qwerty123456',
      },
      TestFolder: {
        id: 'TestFolder',
        name: 'Test Folder/',
        size: 889,
        parentId: 'qwerty123456',
        isDir: true,
      },
    },
  },
  error: '',
};

export const fileExplorerReducer = (state = fileExplorerInitialState, action) => {
  switch (action.type) {
    case 'SET_FILES':
      return Object.assign({}, state, {
        files: {
          ...state.files,
          fileMap: action.payload,
        },
      });
    case 'CREATE_FOLDER':
      return Object.assign({}, state, {
        files: {
          ...state.files,
          fileMap: action.payload,
        },
      });
    case 'MOVE_FILES':
      return Object.assign({}, state, {
        files: {
          ...state.files,
          fileMap: action.payload,
        },
      });
    case 'DELETE_FILES':
      return Object.assign({}, state, {
        files: {
          ...state.files,
          fileMap: action.payload,
        },
      });
    case 'UPDATE_ROOT_NAME':
      return {
        ...state,
        files: {
          ...state.files,
          fileMap: {
            ...state.files.fileMap,
            [action.payload.rootId]: {
              ...state.files.fileMap[action.payload.rootId],
              name: action.payload.name,
            },
          },
        },
      };
    default:
      return state;
  }
};
