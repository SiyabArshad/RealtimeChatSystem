import React from 'react';
import { CircularProgress } from '@material-ui/core';
export default function Loading({loading}) {
  return (
    <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: loading?'flex':"none",
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        }}
      >
        <CircularProgress />
      </div>
  )
}
