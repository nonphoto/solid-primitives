import { Component, createEffect, createResource, mergeProps, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
import { Title, useParams, useRouteData } from "solid-start";
import { PRIMITIVE_PAGE_PADDING_TOP } from "~/components/Header/Header";
import Heading from "~/components/Primitives/Heading";
import InfoBar from "~/components/Primitives/InfoBar";
import { pageWidthClass } from "~/constants";
import { PackageData } from "~/types";
import { PackageInstallation } from "./package-installation";
import { createPrimitiveNameTooltips } from "./primitive-name-tooltip";
import { fetchPackageData, getCachedPackageListItemData } from "~/packageData";

type Params = {
  name: string;
};

export function routeData() {
  const { name } = useParams<Params>();

  const listItemData = getCachedPackageListItemData(name);

  const [dataResource] = createResource<PackageData>(() => fetchPackageData(name));

  return { name, dataResource, listItemData };
}

const Page: Component = () => {
  const { name, dataResource, listItemData } = useRouteData<typeof routeData>();

  const data: Partial<PackageData> = mergeProps(listItemData, dataResource);

  if (!isServer) {
    document.documentElement.classList.add("primitives-page-main");
    onCleanup(() => {
      document.documentElement.classList.remove("primitives-page-main");
    });
  }

  const packageName = `@solid-primitives/${name}`;

  return (
    <>
      <Title>{name}</Title>
      <div
        class="-z-1 absolute top-0 left-0 right-0 h-[95vh]
        bg-[linear-gradient(to_bottom,#fff_var(--primitive-padding-top-gr),transparent)]
        dark:bg-[linear-gradient(to_bottom,#293843_var(--primitive-padding-top-gr),transparent)]"
        style={{
          "--primitive-padding-top-gr": `${PRIMITIVE_PAGE_PADDING_TOP + 300}px`,
        }}
      />
      <main
        class={`${pageWidthClass} mx-auto mb-6 overflow-x-hidden md:overflow-visible`}
        style={{ "padding-top": `${PRIMITIVE_PAGE_PADDING_TOP}px` }}
      >
        <div class="bg-page-main-bg rounded-3xl p-3 sm:p-8">
          <div class="mb-[90px] flex items-center justify-between gap-[30px] text-[#232324] dark:text-white sm:gap-[100px]">
            <Heading name={name} />
          </div>

          <div class="my-8">
            <InfoBar
              name={name}
              packageName={packageName}
              packageSize={data.packageSize}
              primitives={data.primitives}
              stage={data.stage}
            />
          </div>

          <div
            class="prose"
            ref={el => {
              createEffect(() => {
                data.primitives &&
                  createPrimitiveNameTooltips({
                    target: el,
                    primitives: data.primitives,
                  });
              });
            }}
          >
            <H2 text="Installation" />
            <PackageInstallation packageName={packageName} />

            <H2 text="Readme" />
            <div innerHTML={data.readme} />
          </div>
        </div>
      </main>
    </>
  );
};

const H2: Component<{ text: string }> = props => {
  const id = () => props.text.toLowerCase().replace(/ /g, "-");
  return (
    <h2 id={id()}>
      <a class="header-anchor" href={`#${id()}`}>
        #
      </a>
      {props.text}
    </h2>
  );
};

export default Page;
