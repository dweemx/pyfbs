# automatically generated by the FlatBuffers compiler, do not modify

# namespace: Dim

import flatbuffers


class UInt32bArray(object):
    __slots__ = ["_tab"]

    @classmethod
    def GetRootAsUInt32bArray(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = UInt32bArray()
        x.Init(buf, n + offset)
        return x

    # UInt32bArray
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # UInt32bArray
    def Data(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            a = self._tab.Vector(o)
            return self._tab.Get(
                flatbuffers.number_types.Uint32Flags,
                a + flatbuffers.number_types.UOffsetTFlags.py_type(j * 4),
            )
        return 0

    # UInt32bArray
    def DataAsNumpy(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.GetVectorAsNumpy(flatbuffers.number_types.Uint32Flags, o)
        return 0

    # UInt32bArray
    def DataLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0


def UInt32bArrayStart(builder):
    builder.StartObject(1)


def UInt32bArrayAddData(builder, data):
    builder.PrependUOffsetTRelativeSlot(
        0, flatbuffers.number_types.UOffsetTFlags.py_type(data), 0
    )


def UInt32bArrayStartDataVector(builder, numElems):
    return builder.StartVector(4, numElems, 4)


def UInt32bArrayEnd(builder):
    return builder.EndObject()
