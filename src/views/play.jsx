import { useState, useEffect, useContext } from 'react';
import { PlayBlock } from '../components/play-components/play-block.tsx';
import { StoreContext } from '../lib/context/context.ts';
import { CharPlay } from '../components/play-components/char-play.jsx';

const PLAY_STATE = {
  MORNING_ACTIONS: {
    objectKey: "MORNING_ACTIONS",
    label: "MorningAction",
    selected: "cook",
    actions: [
      {
        name: "cook",
        condition: "ingridients",
        active: true,
      },
      {
        name: "read",
        condition: "book",
        active: false,
      },
      {
        name: "meditate",
        condition: "",
        active: false,
      },
    ],
  },
  SCHOOL_EVENT: {
    objectKey: "SCHOOL_EVENT",
    label: "SchoolEvent",
    selected: "will be shown on resolve",
    actions: [
      {
        name: "will be shown on resolve",
        condition: "",
        active: true,
      },
    ],
  },
  SCHOOL_ACTIONS: {
    objectKey: "SCHOOL_ACTIONS",
    label: "SchoolActions",
    selected: "cook",
    actions: [
      {
        name: "cook",
        condition: "ingridients",
        active: true,
      },
      {
        name: "read",
        condition: "book",
        active: false,
      },
      {
        name: "meditate",
        condition: "",
        active: false,
      },
    ],
  },
  NOON_EVENT: {
    objectKey: "NOON_EVENT",
    label: "NoonEvent",
    selected: "will be shown on resolve",
    actions: [
      {
        name: "will be shown on resolve",
        condition: "",
        active: true,
      },
    ],
  },
  NOON_ACTIONS: {
    objectKey: "NOON_ACTIONS",
    label: "NoonActions",
    selected: "cook",
    actions: [
      {
        name: "cook",
        condition: "ingridients",
        active: true,
      },
      {
        name: "read",
        condition: "book",
        active: false,
      },
      {
        name: "meditate",
        condition: "",
        active: false,
      },
    ],
  },
  HOME_ACTIONS: {
    objectKey: "HOME_ACTIONS",
    label: "HomeActions",
    selected: "cook",
    actions: [
      {
        name: "cook",
        condition: "ingridients",
        active: true,
      },
      {
        name: "read",
        condition: "book",
        active: false,
      },
      {
        name: "meditate",
        condition: "",
        active: false,
      },
    ],
  },
  HOME_NIGHT_ACTIONS: {
    objectKey: "HOME_NIGHT_ACTIONS",
    label: "HomeNightActions",
    selected: "cook",
    actions: [
      {
        name: "cook",
        condition: "ingridients",
        active: true,
      },
      {
        name: "read",
        condition: "book",
        active: false,
      },
      {
        name: "meditate",
        condition: "",
        active: false,
      },
    ],
  },
  FOOD_1: {
    objectKey: "FOOD_1",
    label: "Food1",
    selected: "no food",
    actions: [
      {
        name: "hamSandwich",
        condition: "hamSandwich",
        active: true,
      },
      {
        name: "no food",
        condition: "",
        active: false,
      },
    ],
  },
  FOOD_2: {
    objectKey: "FOOD_2",
    label: "Food2",
    selected: "no food",
    actions: [
      {
        name: "hamSandwich",
        condition: "hamSandwich",
        active: false,
      },
      {
        name: "no food",
        condition: "",
        active: true,
      },
    ],
  },
}

export const Play = () => {
  const { store } = useContext(StoreContext);
  const [playState, setPlayState] = useState(PLAY_STATE);

  useEffect(() => console.log('effect playChanges', playState), [playState]);

  if (!store?.char) return <div>{"Please select your character"}</div>;

  const secondary = JSON.parse(store?.char?.secondary);
  console.log('secondary', secondary);

  console.log('store', store);

  const updatePlayState = (objectKey, objectValue) => {
    setPlayState({...playState, [objectKey]: objectValue});
  }

  // const updateStorePlay = (charData) => {
  //   //@ts-ignore
  //   setStore({ ...store, char: charData });
  //   console.log(store);
  // }

  // const doUpgrade = (id, type, name) => {
  //   upgradeChar(id, type, name).then(() => {
  //     getSingleChar(id).then(res => {
  //       console.log('getSingleChar', res?.data);
  //       if (res?.data) {
  //         updateStore(res?.data)
  //         setActiveStats(activeStats);
  //       };
  //     });
  //   });
  // };

  return <div className='mt-8'>
      <div>{'Day ' + secondary?.day}</div>
      <div className='flex flex-wrap mt-8'>
        {Object.keys(PLAY_STATE).map((itemKey) => {
          const item = PLAY_STATE[itemKey];

          return <PlayBlock key={itemKey} objectKey={item.objectKey} updatePlay={updatePlayState} state={playState} />;
        })}
      </div>
      <hr />
      <div>
        <CharPlay />
      </div>
  </div>
}
