import { Box, Button, CloseButton, Divider, Group, Modal, Text, TextInput, Title, Transition } from "@mantine/core";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { Route, Routes, useNavigate } from "react-router-dom";
import classes from './app.module.css';
import { useNuiEvent } from "./hooks/useNuiEvent";
import Occlusion from "./layouts";
import { useVisibility } from "./providers/VisibilityProvider";
import { useGeneralStore } from "./store/general";
import { useRoomsStore } from "./store/rooms";
import { MLODef } from "./types/MLODef";
import { RoomDef } from "./types/RoomDef";
import { fetchNui } from "./utils/fetchNui";

const App: React.FC = () => {
  const [visible, setVisible] = useVisibility((state) => [state.visible, state.setVisible]);
  // const navigate = useNavigate();
  const mlo = useGeneralStore((state) => state.mlo);

  useNuiEvent('setVisible', (data: any) => {
    setVisible(true);
    // if (data === undefined) return navigate('/occlusion/general');
  });

  // useNuiEvent('openMLO', (data) => {
  //   setVisible(true);

  //   const mloData = new MLODef(data.mloData);
  //   const roomSelectList =  mloData.rooms.map((room: RoomDef) => { return { value: room.index.toString(), label: `${room.index}. ${room.name}` } });

  //   useGeneralStore.setState({ mlo: mloData });
  //   useRoomsStore.setState({
  //     roomList: mloData.rooms,
  //     activeRoom: data?.roomIndex ? mloData.rooms[data.roomIndex] : null,
  //     roomSelectList: roomSelectList,
  //     selectedRoom: data?.roomIndex ? roomSelectList[data.roomIndex].value : null
  //   });

  //   return navigate('/occlusion/general');
  // });

  const handleExit = () => {
    // handlers.close();
    setVisible(false);
    fetchNui('exitMLO', { mloData: mlo });
  };

  useHotkeys([
    ['Escape', handleExit]
  ])

  return (
    <Box className={classes.container} bg="">
      <Transition transition='slide-up' mounted={visible}>
      {(style) => (
      <Box bg="red">
        <Button>Hello World</Button>
      </Box>

      )}

      </Transition>
    </Box>
    
    // <Box className={classes.container}>
    //   <Transition transition="slide-up" mounted={visible}>
    //     {(style) => (
    //       <Box className={classes.main} style={style}>
    //         <Group justify='space-between' p={10}>
    //           <Title order={3}>MLO Audio Occlusion Generator</Title>
    //           <CloseButton
    //             size='xl'
    //             onClick={handleExit}
    //           />
    //         </Group>
    //         <Divider />
    //         <Routes>
    //           <Route path="/occlusion/*" element={<Occlusion />} />
    //         </Routes>
    //       </Box>
    //     )}
    //   </Transition>
    // </Box>
  );
};

export default App;
