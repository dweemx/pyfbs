# automatically generated by the FlatBuffers compiler, do not modify

# namespace: flatmake

import flatbuffers

class ColorArray1D(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsColorArray1D(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = ColorArray1D()
        x.Init(buf, n + offset)
        return x

    # ColorArray1D
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # ColorArray1D
    def Color(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from .UByteArray import UByteArray
            obj = UByteArray()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

def ColorArray1DStart(builder): builder.StartObject(1)
def ColorArray1DAddColor(builder, color): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(color), 0)
def ColorArray1DEnd(builder): return builder.EndObject()
