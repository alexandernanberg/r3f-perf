import { styled } from '@stitches/react';

export const PerfS = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 9999,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
  backgroundColor: 'rgba(36, 36, 36, 1)',
  color: '#fff',
  pointerEvents: 'none',
  margin: 0,
  padding: '4px 6px',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  userSelect: 'none',
  '&.top-left': {
    right: 'initial',
    left: 0,
  },
  '&.bottom-left': {
    right: 'initial',
    top: 'initial',
    bottom: 0,
    left: 0,
    '.__perf_toggle': {
      top: '-21px',
      bottom: 'initial',
    },
  },
  '&.bottom-right': {
    top: 'initial',
    bottom: 0,
    '.__perf_toggle': {
      top: '-21px',
      bottom: 'initial',
    },
  },
});

export const PerfI = styled('i', {
  display: 'inline-flex',
  fontStyle: 'normal',
  padding: 0,
  lineHeight: '13px',
  fontSize: '14px',
  width: '62px',
  position: 'relative',
  fontWeight: 500,
  letterSpacing: '0px',
  textAlign: 'left',
  height: '29px',
  whiteSpace: 'nowrap',
  justifyContent: 'space-evenly',
  fontVariantNumeric: 'tabular-nums',
  svg: {
    padding: 0,
    color: 'rgba(145, 145, 145, 0.12)',
    fontSize: '22px',
    position: 'absolute',
    zIndex: 1,
    maxHeight: '21px',
    left: ' 50%',
    marginLeft: '-23px',
    top: '4px',
  },
});

export const PerfB = styled('span', {
  verticalAlign: 'bottom',
  position: 'absolute',
  bottom: '5px',
  color: 'rgba(101, 197, 188, 1)',
  textAlign: 'revert',
  letterSpacing: '1px',
  fontSize: '8px',
  fontWeight: '500',
  right: 0,
});

export const Graph = styled('div', {
  height: '61px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '310px',
  margin: '0 auto',
  maxWidth: '312px',
});

export const Graphpc = styled('div', {
  textAlign: 'center',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  color: '#f1f1f1',
  padding: '7px',
  width: '100%',
  backgroundColor: 'rgba(36, 36, 37, 0.8)',
  zIndex: 1,
  position: 'absolute',
  height: '100%',
});

export const Toggle = styled('div', {
  pointerEvents: 'auto',
  justifyContent: 'center',
  display: 'block',
  cursor: 'pointer',
  fontSize: '12px',
  backgroundColor: 'rgb(41, 43, 45)',
  marginTop: '6px',
  width: 'auto',
  margin: '0 auto',
  color: 'rgba(145, 145, 145, 1)',
  textAlign: 'center',
  position: 'absolute',
  right: 0,
  bottom: ' -21px',
  padding: '4px 11px',
});
