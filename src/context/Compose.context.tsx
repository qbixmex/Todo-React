import {FC, ReactNode} from 'react';

interface IComposeContext {
  components?: FC<{children?: ReactNode}>[];
  children?: ReactNode | undefined;
}

const ComposeContext = ({
  components = [],
  children,
}: IComposeContext) => {
  return (
    <>
      {
        components.reduceRight((accumulator, Component: any) => {
          return <Component>{accumulator}</Component>;
        }, children)
      }
    </>
  );
};

export default ComposeContext;
