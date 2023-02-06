import { Button, Form, Switch } from "antd";
import { useState } from "react";
const App = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <div className=" flex w-screen h-screen    justify-center place-items-center">
        <div className="flex mx-4 md:mx-0 lg:mx-0 flex-col   h-auto w-full lg:w-2/3 md:w-3/4 bg-gray-100  py-6 px-2 rounded-3xl justify-center place-items-center">
          <div className="flex flex-col">
            <div className=" flex justify-between w-[250px] place-items-center space-y-2">
              <p className=" font-serif mt-2  font-normal text-lg text-black">
                Is this a real-time audit?
              </p>
              <Switch className=" bg-gray-200" />
            </div>
            <div className=" flex flex-col justify-between space-y-2">
              <p className=" font-serif w-[250px] font-normal text-lg text-black">
                Exit/Entry
              </p>

              <div className="flex justify-start space-x-2">
                <button className="w-20 h-10 bg-blue-900 text-white font-medium rounded-lg">
                  Exit
                </button>
                <button className="w-20 h-10 bg-gray-200 text-blue-900  font-medium rounded-lg">
                  Entry
                </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col space-y-2">
            <p className="font-serif w-[250px] font-bold text-xl text-black mt-4">
              Simplified Questions
            </p>
            <div className=" flex flex-col justify-between space-y-2">
              <p className=" font-serif w-[250px] font-normal text-lg text-black">
                Was there a HH Oppurtunity?{" "}
              </p>

              <div className="flex justify-between space-x-2">
                <button className="w-20 h-10 bg-blue-900 text-white font-medium rounded-lg">
                  Yes
                </button>
                <button className="w-20 h-10 bg-gray-200 text-blue-900 font-medium rounded-lg">
                  No
                </button>
                <button className="w-20 h-10 bg-gray-200 text-blue-900 font-medium rounded-lg">
                  N/A
                </button>
              </div>
            </div>
            <div className=" flex flex-col justify-between space-y-2">
              <p className=" font-serif w-[250px] font-normal text-lg text-black">
                Was HH Performed?
              </p>

              <div className="flex justify-between space-x-2">
                <button className="w-20 h-10  bg-gray-200 text-blue-900 font-medium rounded-lg">
                  Yes
                </button>
                <button className="w-20 h-10 bg-gray-200 text-blue-900 font-medium rounded-lg">
                  No
                </button>
                <button className="w-20 h-10 bg-blue-900 text-white font-medium rounded-lg">
                  N/A
                </button>
              </div>
            </div>
            <div className=" flex flex-col justify-between space-y-2">
              <p className=" font-serif w-[250px] font-normal text-lg text-gray-800">
                Was technique correct to UCSF Policies & Procedures?
              </p>

              <div className="flex justify-between space-x-2">
                <button className="w-20 h-10 bg-gray-200 text-blue-900 font-medium rounded-lg">
                  Yes
                </button>
                <button className="w-20 h-10 bg-gray-200 text-blue-900 font-medium rounded-lg">
                  No
                </button>
                <button className="w-20 h-10 bg-blue-900 text-white font-medium rounded-lg">
                  N/A
                </button>
              </div>
            </div>
          </div>
          <div className=" flex pt-6">
            <button className="w-32 h-10 bg-blue-900 text-white font-medium rounded-lg">
              Submit
            </button>
          </div>
        </div>

        <div></div>
      </div>
      {/* 
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item> */}
    </Form>
  );
};
export default App;
