import { useState } from "react";
import { generateLoot } from "../lib/api/api.ts";

export const Generate = () => {
  const [type, setType] = useState('Coins');
  const [looTScore, setLootScore] = useState('1');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const executeGenerateLoot = (type, score) => {
    generateLoot(type, score).then(res => setGeneratedResponse(JSON.stringify(res.data)));
  }

  return <>
    <div className="mt-8 mb-8">Pick type and tier to generate loot instance</div>
    <div className="flex w-full flex-col">
      <div className="form-group flex-row items-end mt-4 justify-center">
        <div className="form-field w-1/3">
          <label className="form-label">Item's type</label>
          <select className="select select-primary" onChange={(e) => setType(e.target.value)}>
            <option>Coins</option>
            <option>Potions</option>
            <option>Gear</option>
            <option>Box</option>
          </select>
        </div>
        <div className="form-field w-1/3">
          <label className="form-label">Loot Score</label>
          <input class="input input-secondary" placeholder="" type="number" onChange={(e) => setLootScore(e.target.value)} />
        </div>
        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <button type="button" className="btn btn-outline-success w-full" onClick={() => executeGenerateLoot(type, looTScore)}>Generate</button>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-8">Result</div>
      <div>{generatedResponse}</div>
    </div>
  </>;
}
