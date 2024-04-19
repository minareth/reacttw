// // not used in the project currently
// import { useState, useContext } from 'react';
// import { StoreContext } from '../lib/context/context.ts';
// import { Stats } from '../components/stats/stats.tsx';
// import { Skills } from '../components/stats/skills.tsx';
// import { Secondary } from '../components/stats/secondary.tsx';
// import { CharacterOperations } from '../components/stats/character-operations.tsx';
// import { upgradeChar, getSingleChar } from '../lib/api/api.ts';
// import { Inventory } from '../components/stats/inventory.tsx';
// import { Equipment } from '../components/stats/equipment.tsx';
// import { Reputation } from '../components/stats/reputation.tsx';
// import { Property } from '../components/stats/property.tsx';

// const STATS_TAB_TYPES = {
//   "STATS": "stats",
//   "SECONDARY": "secondary",
//   "SKILLS": "skills",
//   "INVENTORY": "inventory",
//   "EQUIPMENT": "equipment",
//   "REPUTATION": "reputation",
//   "PROPERTY": "property",
//   "OPERATIONS": "operations",
// }

// export const Char = () => {
//   const { store, setStore } = useContext(StoreContext);
//   const [activeStats, setActiveStats] = useState(STATS_TAB_TYPES.STATS);

//   const updateStore = (charData) => {
//     //@ts-ignore
//     setStore({ ...store, char: charData });
//     console.log(store);
//   }

//   const doUpgrade = (id, type, name) => {
//     upgradeChar(id, type, name).then(() => {
//       getSingleChar(id).then(res => {
//         console.log('getSingleChar', res?.data);
//         if (res?.data) {
//           updateStore(res?.data)
//           setActiveStats(activeStats);
//         };
//       });
//     });
//   };

//   return <div className="char">
//     <div onClick={() => setActiveStats(STATS_TAB_TYPES.OPERATIONS)} className='cursor-pointer'>{'<<  ' + store?.char?.name + '  >>'}</div>
//     <br />
//     {store?.char && <div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.STATS)} className={(activeStats === STATS_TAB_TYPES.STATS ? 'text-blue-500 ' : '') + 'inline-block pr-3 cursor-pointer'}>Primary Stats</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.SECONDARY)} className={(activeStats === STATS_TAB_TYPES.SECONDARY ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r border-l cursor-pointer'}>Secondary Stats</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.SKILLS)} className={(activeStats === STATS_TAB_TYPES.SKILLS ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Skills</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.INVENTORY)} className={(activeStats === STATS_TAB_TYPES.INVENTORY ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Inventory</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.EQUIPMENT)} className={(activeStats === STATS_TAB_TYPES.EQUIPMENT ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Equipment</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.REPUTATION)} className={(activeStats === STATS_TAB_TYPES.REPUTATION ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Reputation</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.PROPERTY)} className={(activeStats === STATS_TAB_TYPES.PROPERTY ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Property</div>
//       <div onClick={() => setActiveStats(STATS_TAB_TYPES.OPERATIONS)} className={(activeStats === STATS_TAB_TYPES.OPERATIONS ? 'text-blue-500 ' : '') + 'inline-block pl-2 cursor-pointer'}>Operations</div>
//     </div>}
//     <br />
//     {store?.char && activeStats === STATS_TAB_TYPES.STATS && <Stats char={store?.char} upgrade={doUpgrade} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.SECONDARY && <Secondary char={store?.char} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.SKILLS && <Skills char={store?.char} upgrade={doUpgrade} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.INVENTORY && <Inventory char={store?.char} upgrade={doUpgrade} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.EQUIPMENT && <Equipment char={store?.char} upgrade={doUpgrade} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.REPUTATION && <Reputation char={store?.char} upgrade={doUpgrade} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.PROPERTY && <Property char={store?.char} upgrade={doUpgrade} />}
//     {store?.char && activeStats === STATS_TAB_TYPES.OPERATIONS && <CharacterOperations char={store?.char} />}
//     {!store?.char && <div>{"Character is not selected"}</div>}
//   </div>
// }
