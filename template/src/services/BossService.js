const ENDPOINT = 'http://localhost:4500/api/bosses';

const BossService = () => {
    return  {
        getBosses: () => fetch(ENDPOINT).then(d => d.json()),
        postBoss: boss => { return fetch(ENDPOINT, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify(boss)
        }).then(resp => {
            if(resp.ok) {return resp.json();}
        }).then( data => {if(data) return data})},
        getBossById: id => fetch(ENDPOINT + "/" + id).then(d => d.json()),
        deleteBossById: id => fetch(ENDPOINT + "/" + id, { method: 'DELETE'}).then( resp => {
            if(resp.ok){
                return id;
            } 
        }),
        updateBossById: (id, boss) => fetch(ENDPOINT + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(boss)
        }).then(resp => {
            if(resp.ok) { console.log("boss has been updated."); return {id: id, ...boss}
            } 
        })
    };
};

export default BossService();