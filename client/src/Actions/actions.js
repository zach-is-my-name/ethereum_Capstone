import 'isomorphic-fetch'

export const APPLY_FORM_POST_SUCCESS = 'APPLY_FORM_POST_SUCCESS'

export const USER_SELECTED_DAPP = 'USER_SELECTED_DAPP';
export const userSelectedDapp = (index) => ({
    type: USER_SELECTED_DAPP,
    index: index
})

export const FETCH_MEMBERDAPPS_SUCCESS = 'FETCH_MEMBERDAPPS_SUCCESS'
export const fetchMemberDappsSuccess = (dappArray) => ({
    type: FETCH_MEMBERDAPPS_SUCCESS, 
    dappArray: dappArray
})

export const FETCH_PROPOSALS_SUCCESS = 'FETCH_PROPOSALS_SUCCESS'
export const fetchProposalsSuccess = (proposals) => ({
    type: FETCH_PROPOSALS_SUCCESS, 
    proposals: proposals
})



export const submitApply = (inputs) => async dispatch => {
console.log("FETCH INPUT", JSON.stringify(inputs))
    try {
        let response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let _response = await response.json();
        console.log("Response from Server", _response);
    } catch (err) {
        console.error(err)
    }
}

export const fetchMemberDapps = () => async dispatch => {
    try {
        let response = await fetch('http://localhost:3001/users', {
            method: 'GET'
        })
    let _response = await response.json();
    console.log("GET response from Server", _response);
    dispatch(fetchMemberDappsSuccess(_response))
    } catch (err) {
        console.error(err)
    }
}


export const asyncPostProposal = (proposal) => async dispatch => {
    console.log('PROPOSALS ASYNC ACTION')
    console.log("proposal post INPUT", JSON.stringify(proposal))
    try {
        let response = await fetch('http://localhost:3001/proposals', {
            method: 'POST',
            body: JSON.stringify(proposal),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let _response = await response.json();
        console.log("Response from Server", _response);
    } catch (err) {
        console.error(err)
    }
}

export const fetchProposals = () => async dispatch => {
    try {
        let response = await fetch('http://localhost:3001/proposals', {
            method: 'GET'
        })
    let _response = await response.json();
    console.log("GET response from Server", _response);
    dispatch(fetchProposalsSuccess(_response))
    } catch (err) {
        console.error(err)
    }
}

