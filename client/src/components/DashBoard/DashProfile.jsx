
import { useState } from "react";
import { Modal, Button, TextInput, Label, Avatar } from "flowbite-react";
import { HiPencil } from "react-icons/hi";

export default function DashProfile() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    role: "Administrator",
    status: "Active",
    avatar: "https://via.placeholder.com/150",
  };

  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState(currentUser);
  const [editData, setEditData] = useState({
    fullName: currentUser.fullName,
    email: currentUser.email,
    role: currentUser.role,
    status: currentUser.status,
  });

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.id]: e.target.value,
    });
  };

  
  const handleSave = () => {
    const updatedProfile = { ...profileData, ...editData };
    setProfileData(updatedProfile);
    localStorage.setItem("currentUser", JSON.stringify(updatedProfile));
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-6">
      <div className="py-8">
        <h2 className="text-2xl font-semibold leading-tight mb-4">Profile</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Avatar
              img={profileData.avatar}
              rounded={true}
              size="xl"
            />
            <div className="ml-6">
              <h3 className="text-xl font-bold">{profileData.fullName}</h3>
              <p className="text-gray-600">{profileData.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" value="Full Name" />
              <TextInput
                id="fullName"
                type="text"
                value={profileData.fullName}
                readOnly
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                value={profileData.email}
                readOnly
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="role" value="Role" />
              <TextInput
                id="role"
                type="text"
                value={profileData.role}
                readOnly
                className="bg-gray-100"
              />
            </div>
            <div>
              <Label htmlFor="status" value="Status" />
              <TextInput
                id="status"
                type="text"
                value={profileData.status}
                readOnly
                className="bg-gray-100"
              />
            </div>
          </div>
          <div className="mt-6">
            <Button onClick={() => setShowModal(true)} gradientDuoTone="cyanTo-blue">
              <HiPencil className="mr-2" /> Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Chỉnh Sửa Hồ Sơ */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName" value="Full Name" />
              <TextInput
                id="fullName"
                type="text"
                value={editData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                value={editData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="role" value="Role" />
              <TextInput
                id="role"
                type="text"
                value={editData.role}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="status" value="Status" />
              <TextInput
                id="status"
                type="text"
                value={editData.status}
                onChange={handleChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
