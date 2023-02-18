import createPersistedState from 'vuex-persistedstate';

export default ( { store } ) => {
    let storage = localStorage.getItem( 'molla-vue' );

    if ( storage && JSON.parse( storage ).demo.current != 14 ) {
        localStorage.clear();
    }

    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'molla-vue',
            paths: []
        } )( store )
    } )
}