import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Radio, Select, Switch } from "antd";
import { useState } from "react";
const { Option } = Select;

const q1Array = [
  {
    label: "Entry",
    value: true,
  },
  {
    label: "Exit",
    value: false,
  },
];

const App = () => {
  const [isEntry, setIsEntry] = useState(true);

  const onEntryChange = ({ target: { val } }) => {
    setIsEntry(val);
    console.log(val);
  };
  return (
    <div className=" flex w-screen h-screen    justify-center place-items-center">
      <div className="flex mx-4 md:mx-0 lg:mx-0 flex-col h-auto w-full lg:w-2/3 md:w-3/4 bg-gray-100  py-6 px-2 rounded-3xl justify-center place-items-center">
        <div className="flex flex-col w-[440px]">
          <div className="flex justify-between">
            <p className=" font-serif w-[250px] font-medium text-lg text-black">
              Is this a real-time audit?
            </p>

            <Switch className="bg-gray-200" />
          </div>

          <div className="flex  place-items-center justify-between">
            <p className="font-serif  font-medium text-lg text-black">
              Exit/Entry
            </p>
            <div className="flex place-content-center">
              <Radio.Group
                buttonStyle="solid"
                optionType="button"
                value={isEntry}
                onChange={onEntryChange}
                options={q1Array}
              >
                {/* <Radio.Button value={true}>Exit</Radio.Button>
                  <Radio.Button value={false}>Entry</Radio.Button> */}
              </Radio.Group>
            </div>
          </div>
          <div className=" flex flex-col space-y-2">
            <p className="font-serif w-[250px] font-bold text-xl text-black mt-2">
              Simplified Questions
            </p>
            <div className="flex  justify-between place-items-center">
              <p className=" font-serif w-[250px] font-medium  text-black">
                Was there a HH Oppurtunity?
              </p>

              <div className="flex ">
                <Radio.Button value="a">Yes</Radio.Button>
                <Radio.Button value="a">No</Radio.Button>
                <Radio.Button value="a">N/A</Radio.Button>
              </div>
            </div>
            <div className="flex  justify-between place-items-center">
              <p className=" font-serif w-[250px] font-medium  text-black">
                Was HH Performed?
              </p>

              <div className="flex ">
                <Radio.Button value="a">Yes</Radio.Button>
                <Radio.Button value="a">No</Radio.Button>
                <Radio.Button value="a">N/A</Radio.Button>
              </div>
            </div>
            <div className="flex  justify-between place-items-center">
              <p className=" font-serif w-[250px]  font-medium  text-black">
                Was technique correct to UCSF Policies & Procedures?
              </p>

              <div className="flex ">
                <Radio.Button value="a">Yes</Radio.Button>
                <Radio.Button value="a">No</Radio.Button>
                <Radio.Button value="a">N/A</Radio.Button>
              </div>
            </div>
          </div>
          <div className="pt-4">
          <Button className="" type="primary" block>
      Primary
    </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
