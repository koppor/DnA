import { mount } from 'vue-mfe/VueApp';

import React, { useRef, useEffect } from 'react';

export default (props: any) => {
  const ref = useRef(null);
  const hasUser = props.user.roles?.length > 0;

  useEffect(() => {
    mount(ref.current);
  }, []);

  return hasUser ? (
    <>
      <div ref={ref}></div>{' '}
    </>
  ) : (
    props.history.replace('/unauthorised')
  );
};
