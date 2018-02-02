initSidebarItems({"constant":[["MAX_COLOR_TARGETS","Compile-time maximum number of color targets."],["MAX_CONSTANT_BUFFERS","Compile-time maximum number of constant buffers."],["MAX_RESOURCE_VIEWS","Compile-time maximum number of shader resource views (SRV)."],["MAX_SAMPLERS","Compile-time maximum number of samplers."],["MAX_UNORDERED_VIEWS","Compile-time maximum number of unordered access views (UAV)."],["MAX_VERTEX_ATTRIBUTES","Compile-time maximum number of vertex attributes."]],"enum":[["IndexType","A type of each index value in the slice's index buffer"],["Primitive","Describes what geometric primitives are created from vertex data."],["ShaderSet","A complete set of shaders to link a program."],["SubmissionError",""]],"mod":[["buffer","Memory buffers"],["command","Command Buffer device interface"],["dummy","Dummy backend implementation to test the code for compile errors outside of the graphics development environment."],["factory","Resource factory"],["format","Universal format specification. Applicable to textures, views, and vertex buffers."],["handle","Resource handles"],["mapping","Memory mapping"],["memory","Memory stuff"],["pso","Raw Pipeline State Objects"],["shade","Shader handling."],["state","Fixed-function hardware state."],["target","Render target specification."],["texture","Texture creation and modification."]],"struct":[["AdapterInfo","Information about a backend adapater."],["Capabilities","Features that the device supports."],["DomainShader",""],["Frame","Handle to a backbuffer of the swapchain."],["GeometryShader",""],["HullShader",""],["PixelShader",""],["VertexShader",""]],"trait":[["Adapter","Represents a physical or virtual device, which is capable of running the backend."],["CommandQueue","Dummy trait for command queues. CommandBuffers will be later submitted to command queues instead of the device."],["Device","A `Device` is responsible for submitting `CommandBuffer`s to the GPU. "],["QueueFamily","`QueueFamily` denotes a group of command queues provided by the backend with the same properties/type."],["Resources","Different types of a specific API. "],["Surface","A `Surface` abstracts the surface of a native window, which will be presented"],["SwapChain","The `SwapChain` is the backend representation of the surface. It consists of multiple buffers, which will be presented on the surface."]],"type":[["AttributeSlot","Slot for an attribute."],["ColorSlot","Slot for an active color buffer."],["ConstantBufferSlot","Slot for a constant buffer object."],["InstanceCount","Draw number of instances"],["PatchSize","Number of vertices in a patch"],["ResourceViewSlot","Slot for a shader resource view."],["SamplerSlot","Slot for a sampler."],["SubmissionResult",""],["UnorderedViewSlot","Slot for an unordered access object."],["VertexCount","Draw vertex count."]]});