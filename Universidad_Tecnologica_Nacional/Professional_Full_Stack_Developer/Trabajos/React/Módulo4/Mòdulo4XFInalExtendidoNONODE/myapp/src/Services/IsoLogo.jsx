function IsoLogo () {

    const contain = {
        absoluteBox: {
            position: 'absolute',
          },
        isoLogo: {
            position: 'fixed',
            left: '0%',
            top: '0%',
            width: '100%',
            height: '140px',
            backgroundColor: '#ac9e4f',
          },

          static: {
            position: 'static',
            left: '0%',
            top: '0%',
            width: '100%',
            height: '140px',
          }
    };

    return <> <div style={contain.absoluteBox}><nav style={contain.isoLogo}>
        <h1>Mercado Trucho</h1>
    </nav>
    </div><div style={contain.static}></div></>
}

export default IsoLogo